import React from 'react'
import HeaderMobile from './headerMobile/HeaderMobile';
import style from './message.module.css';
import SearchMobile from './searchMobile/SearchMobile';
import UsersMessage from './usersMessage/UsersMessage';
//import Header from '../../pages/HomePage/Header/Header.jsx';
const Message = () => {
  return (
    <div className={style.Message}>
       
        <div className={style.mobaile}>
          <HeaderMobile/>
          <SearchMobile/>
          <UsersMessage/>
        </div>
    </div>
  )
}

export default Message