import React, { useEffect, useState } from 'react'
//import { v4 } from 'uuid';
//import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
//import { postList } from './post.props'
//import { removePost } from '../../../../redux/postSlice/postSlice';
import style from './postlist.module.css';
//import ClearIcon from '@mui/icons-material/Clear';
import {onValue,ref,} from 'firebase/database';
import {db} from '../../../../firebase.js';

const PostList = ({id}) => {
const {title,text} = useSelector((state)=>state.posts.arr)
 //const disp = useDispatch();
 //const[list]=useState(postList)
 const[todos,setTodos] = useState([])

  useEffect(()=>{
   onValue(ref(db),(snapshot)=>{
    setTodos([])
     const data = snapshot.val();
     if(data!== null){
      Object.values(data).map((todo)=>{
        setTodos((old) =>[...old,todo]);
      })
     }
   })
  },[])
     return (
    <div className={style.postList}>
  {
    todos.map((el)=>{
        return <div className={style.posts}>
          <div className={style.wrap}>
               
               <h1>{el.title}</h1>
               <p>{el.text}</p>
              
          </div>
           
          
          </div>
    })
  }

    </div>
  )
}

export default PostList