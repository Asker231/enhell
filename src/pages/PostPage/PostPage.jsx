import React from 'react'
import style from './postPage.module.css';
import Button  from '@mui/material/Button';
import { Link } from 'react-router-dom';
import PostForm from '../../components/FormPosts/PostForm';

const PostPage = () => {
  return (
    <div className={style.postpage}>
        <PostForm/>
        <Link to='/'><Button href="#text-buttons">назад</Button></Link> 
        </div>
  )
}

export default PostPage