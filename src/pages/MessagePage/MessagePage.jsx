import React from 'react'
import Message from '../../components/message/Message';
import Navigate from '../../components/navigate/Navigate'
import style from './message.module.css';

const MessagePage = () => {
  return (
    <div className={style.messagePage}>
     <Navigate/>
     <Message/>
    </div>
  )
}

export default MessagePage