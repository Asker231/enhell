import React from 'react'
import style from './usersmessage.module.css';
import {users} from './users.props.js';
import Avatar  from '@mui/material/Avatar';
const UsersMessage = () => {
  return (
    <div className={style.usermessage}>
        {
            users.map((el)=>{
                return <div className={style.users}>
                    <Avatar src="/broken-image.jpg" />
                    <div className={style.userinfo}>
                    <h3>{el.useranme}</h3>
                    <h4>{el.secondname}</h4>
                </div>
                </div>
                
                
            })
        }
    </div>
  )
}

export default UsersMessage