
import { useSelector } from 'react-redux'

export function AuthHook () {
    const {email,id} = useSelector((state)=>state.users)
  
  return {
      isAuth: !!email,
      email,
      id,
    };
  
}

