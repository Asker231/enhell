import { Navigate } from 'react-router-dom'
import {AuthHook} from '../../hooks/AuthHook.js'
import Header from './Header/Header.jsx';
import style from './home.module.css';
import SectionPost from './SectionPost/SectionPost.jsx';


const HomePage = () => {

  const {isAuth} = AuthHook();

  return isAuth === true ? (
     <div className={style.home}>
      <div className={style.fix}>
     <Header/>
      </div>
   
       <SectionPost/>
       
    </div>
  ):(
    <Navigate to='/LoginPage'/>
  )
}

export default HomePage