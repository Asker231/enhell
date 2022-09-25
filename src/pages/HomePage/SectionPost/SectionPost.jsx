import React from 'react'
import PostList from './PostList/PostList';
import style from './section.module.css';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { Link } from 'react-router-dom';
const SectionPost = () => {
  return (
    <div className={style.section}>

        <PostList/>
        <Link className={style.link} to='/PostPage'>
            <AddCircleIcon className={style.plus}/>
        </Link>  
    </div>
  )
}

export default SectionPost