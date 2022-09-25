import React, { useState } from 'react'
import style from './postform.module.css';
import  TextField  from '@mui/material/TextField';
import IconButton  from '@mui/material/IconButton';
import  PhotoCamera  from '@mui/icons-material/PhotoCamera';
import { useDispatch } from 'react-redux';
import  Button  from '@mui/material/Button';
import {addPost} from '../../redux/postSlice/postSlice.js';
import { v4 } from 'uuid';


const PostForm = () => {
  const disp = useDispatch();
  const[title,setTitle] = useState('');
  const[text,setText] = useState('');

  const data ={
    title,
    text,
    id:v4()

  }
  

  return (
    <div className={style.postform}>
        <TextField
         id="filled-basic"  
        value={title} 
        label="Filled" 
        variant="filled"
        onChange={(e)=>setTitle(e.target.value)}
        />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
        value={text}
          variant="filled"
          onChange={(e)=>setText(e.target.value)}
        />
        <div className={style.bottom}>
<IconButton className={style.upload} color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
 </IconButton>
  <Button onClick={()=>{
    disp(addPost(data))
    setText('');
    setTitle('');
  }
  } variant="contained">опубликовать</Button>
        </div>


    </div>
  )
}

export default PostForm