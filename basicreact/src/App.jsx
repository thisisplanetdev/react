import { useContext, useState } from 'react'

import './App.css'
import { use } from 'react'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UserContextProvider'
import userContext from './context/UserContext'
//counter state
// function App() {
  
// function addValue(){
//   setCounter((p) => p+1)
// }
// function removeValue(){
//   setCounter(counter-1)
// }
// const [counter,setCounter] = useState(15)
//   return (
//     <>
//       <h2>react course</h2>
//       <h3>counter value : {counter}</h3>
//       <button onClick={addValue}> add value</button>
//       <button onClick={removeValue}>remove value</button>
//       <p>footer :{counter}</p>
//     </>
//   )
// }
function App(){
  return (<>
  <UserContextProvider>
  <Login />
  <div>this is test</div>
  <Profile />
  </UserContextProvider>
  </>
  )
}
