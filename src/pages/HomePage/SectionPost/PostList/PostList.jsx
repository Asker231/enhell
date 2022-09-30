import React, { useState } from 'react'
//import { v4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { postList } from './post.props'
import { removePost } from '../../../../redux/postSlice/postSlice';
import style from './postlist.module.css';
import ClearIcon from '@mui/icons-material/Clear';

const PostList = ({id}) => {
const lists = useSelector((state)=>state.posts.arr)
const disp = useDispatch();
 //const[list]=useState(postList)

     return (
    <div className={style.postList}>
  {
    lists.map((el)=>{
        return <div className={style.posts}>
          <div className={style.wrap}>
            <img  src='https://oxvo.ru/wp-content/uploads/2018/06/post_5b33514f8e88d.jpeg' alt='image'/>
               <h1>{el.title}</h1>
          </div>
           
          
          </div>
    })
  }

    </div>
  )
}

export default PostList