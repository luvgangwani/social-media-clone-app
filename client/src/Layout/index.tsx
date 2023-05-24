import React, { useCallback, useEffect } from 'react'
import styles from './index.module.css';
import Header from './Header';
import Loader from '../components/Loader';
import { useSelector } from 'react-redux';
import { LoaderState } from '../types';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setShowLoader } from '../redux/loader';
import Setting from '../setting';
import { setConnectionsList } from '../redux/connections';

function Layout() {

  const { show: showLoader } = useSelector((state: LoaderState) => state.loader);

  const dispatch = useDispatch();

  const fetchConnectionsList = useCallback(() => {
    dispatch(setShowLoader(true));
        fetch(Setting.ENDPOINT_GET_CONNECTION_LIST_BY_USERNAME, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
        })
        .then(response => response.json())
        .then(({ success, message, data }) => {
            if (success) {
                dispatch(setConnectionsList(data));
            } else {
                alert(message);
            }
        })
        .catch(error => {
            alert(error.message);
        })
        .finally(() => {
            dispatch(setShowLoader(false));
        })
  }, [dispatch])

  useEffect(() => {
    if (localStorage.getItem('token')) {
        fetchConnectionsList();
    }
  }, [fetchConnectionsList])
  

  return (
    <div className={styles.container}>
        <Header />
        <Loader show={showLoader} />
        <Outlet />
    </div>
  )
}

export default Layout;
