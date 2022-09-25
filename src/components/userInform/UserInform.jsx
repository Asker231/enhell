import React from 'react'
import style from './userinfo.module.css';
import  Avatar  from '@mui/material/Avatar';
import { useSelector } from 'react-redux';

const UserInform = () => {
    const{name,secondname} = useSelector(state=>state.users)
  return (
    <div className={style.userinform}>
        <div className={style.userinform_header}>
        <Avatar className={style.avatar} src="/broken-image.jpg" />
        <div className={style.nameuser}>
            <div>{name}</div>
            <div>{secondname}</div>
        </div>
        </div>
    </div>
  )
}

export default UserInform