import React, { useState } from 'react'
import { postList } from './post.props'
import style from './postlist.module.css';

const PostList = () => {
    const[list,setList]=useState(postList)
  return (
    <div className={style.postList}>
{
    list.map((el)=>{
        return <div className={style.posts}>{el.title}</div>
    })
}
    </div>
  )
}

export default PostList