import React from 'react'
import style from './form.module.css';
import { useState } from 'react';
import  Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';

import { Link } from 'react-router-dom';

const AuthForm = ({title,path,func,btnTitle,link}) => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  return (
    <div className={style.form}>
      <h3>{title}</h3>
        <TextField value={email}  type='email'  onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
        <TextField value={password}  type='password' onChange={(e)=>setPassword(e.target.value)} id="standard-basic" label="Password" variant="standard" />
        <Button variant='contained' onClick={()=>func(email,password)}>{btnTitle}</Button>
        <Link to={path}>{link}</Link>
    </div>
  )
}

export default AuthForm