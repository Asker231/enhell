
import { useSelector } from 'react-redux'

export function AuthHook () {
    const {email,id} = useSelector((state)=>state.users)
  
  return {
      isAuth:true,
      email,
      id,
    };
  
}

