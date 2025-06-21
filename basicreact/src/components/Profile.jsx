import React,{useContext} from 'react'
import userContext from '../context/UserContext'

function Profile() {
  
const {user} = useContext(userContext)


if(!user){
  return <h1>not logged in... </h1>
}
  return (
    <div>
      <div>Profile :{user.username}</div>
    </div>
  )
}

export default Profile
