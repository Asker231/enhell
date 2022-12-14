
import React from 'react'
import { useDispatch } from 'react-redux';
import AuthForm from '../../components/FormAuth/AuthForm';
import style from './reg.module.css';
import {getAuth,createUserWithEmailAndPassword}from 'firebase/auth'
import { addUser } from '../../redux/userSlice/userSlice';
import { useNavigate} from 'react-router-dom';
import AnimeteLogo from '../../components/animatelogo/AnimeteLogo';

const RegisterPage = () => {
  
const nav = useNavigate();
  const disp = useDispatch();
  const hendleAuth = (email,password,name,secondname)=>{
    const auth = getAuth();
    createUserWithEmailAndPassword(auth,email,password)
    .then(({user})=>{
      console.log(user);
      disp(addUser({
        email:user.email,
        id:user.uid,
        name:name,
        secondname:secondname,
      }));
      nav('/')
   
    }) 
  }
  return (
    <div className={style.register}>
     <AnimeteLogo/>
        <AuthForm func={hendleAuth}
        title='Регистрация'
        path='/LoginPage'
        link='или войти'
        btnTitle='регистрация'
        />
        

    </div>
  )
}

export default RegisterPage