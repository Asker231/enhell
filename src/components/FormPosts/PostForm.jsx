import React from 'react'
import style from './postform.module.css';
import  TextField  from '@mui/material/TextField';
import IconButton  from '@mui/material/IconButton';
import  PhotoCamera  from '@mui/icons-material/PhotoCamera';
const PostForm = () => {
  return (
    <div className={style.postform}>
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField
          id="filled-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue=""
          variant="filled"
        />
<IconButton className={style.upload} color="primary" aria-label="upload picture" component="label">
  <input hidden accept="image/*" type="file" />
  <PhotoCamera />
</IconButton>

    </div>
  )
}

export default PostForm