import React from 'react'
import AuthForm from '../../components/FormAuth/AuthForm'
import style from './login.module.css';
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { useDispatch } from 'react-redux';
import {addUser} from '../../redux/userSlice/userSlice.js';
import { useNavigate } from 'react-router-dom';
const LoginPage = () => {
   const nav = useNavigate();
   const disp = useDispatch();

   const handleLogIn=(email,password)=>{
       const auth = getAuth();
       signInWithEmailAndPassword(auth,email,password)
       .then(({user})=>{
          disp(addUser({
            email:user.email,
            id:user.uid,
          }))

          alert('succsess')
          nav('/');
       })
   }

  return (
    <div className={style.login}>
    <AuthForm
    title='Войдите'
    link='или регистрация'
    path='/RegisterPage'
    btnTitle='войти'
    func={handleLogIn}
    />
    
    </div>
  )
}

export default LoginPage