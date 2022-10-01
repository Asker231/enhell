import React from 'react'
import style from './headermobile.module.css';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
const HeaderMobile = () => {
  return (
    <div className={style.headermobile}>
        <h4>Сообщения</h4>
        <Link to='/'>
        <Button variant="contained" href="#contained-buttons">
 <HomeIcon/>
</Button>
        </Link>
        
    </div>
  )
}
////докончить 
export default HeaderMobile