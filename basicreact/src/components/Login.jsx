import React, { useContext, useState } from 'react'
import userContext from '../context/UserContext'

function Login() {
  
  const [username ,setUsername] = useState('')
  const [passoword,setPassword] = useState('');
  const {setUser} = useContext(userContext)
  const handlelogin = (e)=>{
    //do some thing
    e.preventDefault();
    setUser({username,passoword})
    setUsername('login done ')
  }

  const changeusername = (e)=>{
    return setUsername(e.target.value)
  }
  return (
    <div>
      <input type="text"
      value={username}
      onChange={(e)=>setUsername(e.target.value)}
      className='border-2 border-black text-black p-2 m-2 '
      />
      <input type="password"
      value={passoword}
      onChange={(e)=>setPassword(e.target.value)}
      className='border-2 border-black text-black p-2 m-2 '
      />
      <input type="button" value="login" onClick={handlelogin} className='p-3 m-2 bg-gray-300 hover:bg-white rounded-2xl' />
    </div>
  )
}

export default Login
