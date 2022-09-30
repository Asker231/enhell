import React from 'react'
import { Link } from 'react-router-dom'
import Navigate from '../../components/navigate/Navigate'

const MessagePage = () => {
  return (
    <div>
        MessagePage
     <Link to='/'>назад</Link>
     <Navigate/>
    </div>
  )
}

export default MessagePage