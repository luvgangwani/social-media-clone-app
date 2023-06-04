import React, { ChangeEvent, FormEvent, useCallback, useEffect, useState } from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import PostCard from '../../template/PostCard';
import { LikedPostsState, PostFormState, PostsState } from '../../types';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { setShowModal } from '../../redux/modal';
import Modal from '../../template/Modal';
import { useSelector } from 'react-redux';

function Posts() {

  const ADD_POST = 'Add post';
  const EDIT_POST = 'Edit post';

  const [posts, setPosts] = useState<PostsState[] | null>(null);
  const [formTitle, setFormTitle] = useState(ADD_POST);
  const [refreshPosts, setRefreshPosts] = useState(false);
  const [postInProgress, setPostInProgress] = useState<PostFormState>({
    body: '',
  });

  const dispatch = useDispatch();

  const postsLiked = useSelector((state: LikedPostsState) => state.liked.posts);

  const fetchPosts = useCallback(() => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_POSTS, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
    .then(response => response.json())
    .then(({success, data, message, error }) => {
      if (success) {
        setPosts(data)
      } else {
        alert(message)
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }, [dispatch]);

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts, postsLiked])

  useEffect(() => {
    if (refreshPosts) {
      fetchPosts();
      setRefreshPosts(false);
    }
  }, [refreshPosts, fetchPosts])

  const handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setPostInProgress({
      ...postInProgress,
      [e.target.name]: e.target.value
    })
  };

  const handlePostAdd = () => {
    setFormTitle(ADD_POST);
    setPostInProgress({
      body: ''
    })
    dispatch(setShowModal(true))
  };
  
  const handlePostEdit = (id: number)  => {
    dispatch(setShowLoader(true));
    fetch(`${Setting.POSTS_SERVICE_URL}/${id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      }
    })
    .then(response => response.json())
    .then(({ success, message, data }) => {
      if (success) {
        setFormTitle(EDIT_POST)
        setPostInProgress(data);
        dispatch(setShowModal(true))

      }
      else alert(message);
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false))
    });
  }

  const handlePostDelete = (id: number)  => {
    dispatch(setShowLoader(true));
    fetch(Setting.ENDPOINT_POSTS, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      })
    })
    .then(response => response.json())
    .then(({ success, message }) => {
      if (success) {
        alert(message)
        setRefreshPosts(true);
      } else {
        alert(message)
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    dispatch(setShowLoader(true));
    e.preventDefault();
    const options: RequestInit = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postInProgress)
    };

    if (formTitle === EDIT_POST) options.method = 'PUT';

    fetch(Setting.POSTS_SERVICE_URL, options)
    .then(response => response.json())
    .then(({ success, message }) => {
      if (success) {
        alert(message)
        setRefreshPosts(success);
      } else {
        alert(message)
      }
    })
    .catch(error => {
      alert(error.message);
    })
    .finally(() => {
      dispatch(setShowLoader(false));
      dispatch(setShowModal(false));
    });
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <span>Posts</span>
          <button className={styles.add}onClick={handlePostAdd}>Add</button>
        </div>
        {
          (posts && posts.length > 0)
          ?
          posts.map(({ id, name, username, body, likesCount, updated }, index) => (
            <PostCard
              key={index}
              id={id}
              name={name}
              username={username}
              body={body}
              likeCount={likesCount}
              timestamp={updated}
              onEdit={() => { handlePostEdit(id) }}
              onDelete={() => { handlePostDelete(id) }}
            />
          ))
          :
          <div>You haven't created any post.</div>
        }
      </div>
      <Modal
        title={formTitle}
      >
        <form
          className={styles.form}
          onSubmit={handleFormSubmit}
        >
          <textarea
            className={styles.textarea}
            placeholder='Add your new post here..'
            value={postInProgress.body}
            onChange={handleInputChange}
            name='body'
            id='body'
          ></textarea>
          <button
            className={styles.submit}
          >Submit</button>
        </form>
      </Modal>
    </>
  )
}

export default withAuth(Posts);
