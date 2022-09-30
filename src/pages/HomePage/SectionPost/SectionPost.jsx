import React from 'react'
import PostList from './PostList/PostList';
import style from './section.module.css';

import Navigate from '../../../components/navigate/Navigate';
const SectionPost = () => {
  return (
    <div className={style.section}>
        <Navigate/>
        <PostList/>
       
    </div>
  )
}

export default SectionPost