import React from 'react'
import { Link } from 'react-router-dom'
import style from './nav.module.css';
import GroupIcon from '@mui/icons-material/Group';
import EmailIcon from '@mui/icons-material/Email';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import SettingsIcon from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import AddCircleIcon from '@mui/icons-material/AddCircle';



const Navigate = () => {
  return (
    <div className={style.nav}>
       <Link to='/'><Avatar className={style.usericon} src="/broken-image.jpg" /></Link> 
       <Link to='/MessagePage'><EmailIcon/></Link>
       <Link to='/FrendsPage'><GroupIcon/></Link>
       <Link to='/PhotoGaleryPage'><InsertPhotoIcon/></Link>
       <Link to='/SettingPage'><SettingsIcon/></Link>
       <Link className={style.link} to='/PostPage'>
            <AddCircleIcon className={style.plus}/>
        </Link>  
    </div>
  )
}

export default Navigate