import React from 'react'
import style from './form.module.css';
import { useState } from 'react';
import  Button from '@mui/material/Button';
import  TextField  from '@mui/material/TextField';

import { Link } from 'react-router-dom';

const AuthForm = ({title,path,func,btnTitle,link}) => {
  const[email,setEmail] = useState('');
  const[password,setPassword] = useState('');
  const[name,setName] = useState('');
  const[secondname,setSecondName] = useState('');
  return (
    <div className={style.form}>
      <h3>{title}</h3>
        <TextField value={email}  type='email'  onChange={(e)=>setEmail(e.target.value)} id="standard-basic" label="Email" variant="standard" />
        <TextField value={password}  type='password' onChange={(e)=>setPassword(e.target.value)} id="standard-basic" label="Password" variant="standard" />
        
        
        {
          title=='Регистрация'
          ?(
          <>
           <TextField
            type='text'
            id="standard-basic" 
            label='Ваше имя...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            variant='standard' />
           <TextField
            type='text'
            id="standard-basic"
            label='Ваше фамилие'
            value={secondname} 
            onChange={(e)=>setSecondName(e.target.value)} 
            variant='standard' />
          </>
          ):null
        }
        <Button variant='contained' onClick={()=>func(email,password,name,secondname)}>{btnTitle}</Button>
        <Link to={path}>{link}</Link>
    </div>
  )
}

export default AuthForm