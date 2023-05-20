import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import withAuth from '../../hoc/withAuth';
import styles from './index.module.css';
import PostCard from '../../template/PostCard';
import { PostFormState, PostsState } from '../../types';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../../redux/loader';
import Setting from '../../setting';
import { setShowModal } from '../../redux/modal';
import Modal from '../../template/Modal';

function Posts() {

  const ADD_POST = 'Add post';
  const EDIT_POST = 'Edit post';

  const [posts, setPosts] = useState<PostsState[] | null>(null);
  const [formTitle, setFormTitle] = useState(ADD_POST);
  const [postInProgress, setPostInProgress] = useState<PostFormState>({
    body: '',
  });

  const dispatch = useDispatch();

  useEffect(() => {
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
        if (error.name === 'TokenExpiredError') {
          localStorage.removeItem('token');
          // TODO: fix bug when navigate() doesn't remove nav links from the header
          window.location.href = '/';
        }
      }
    })
    .catch(error => {
      alert(error.message)
    })
    .finally(() => {
      dispatch(setShowLoader(false));
    });
  }, [dispatch])

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
    console.log("Delete", id)
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
          posts.map(({ id, name, body, likesCount, updated }, index) => (
            <PostCard
              key={index}
              name={name}
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
