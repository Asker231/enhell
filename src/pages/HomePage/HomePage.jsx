import { Navigate } from 'react-router-dom'
import {AuthHook} from '../../hooks/AuthHook.js'
import Header from './Header/Header.jsx';
import style from './home.module.css';


const HomePage = () => {

  const {isAuth} = AuthHook();

  return isAuth === true ? (
     <div className={style.home}>
         
       <Header/>
    </div>
  ):(
    <Navigate to='/LoginPage'/>
  )
}

export default HomePage