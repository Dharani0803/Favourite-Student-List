import { Routes, Route } from 'react-router-dom'
import Login from "./Login"
import Signup from "./Signup"
import Landing from './Landing'
import Home from './components/Home'
import StudentList from './components/StudentList'
import { useState } from 'react'
import FavouriteStudents from './components/Favouritestudent'

function App() {
   const [users,setusers]=useState(
          [
              {
                  username:"John",
                  password:"123"
              }
          ]
      )

  return (
  <Routes>
    <Route path='/' element={<Login users={users} setusers={setusers} />}/>
    <Route path='/signup' element={<Signup users={users} setusers={setusers} />}/>
    <Route path='/landing' element={<Landing/>}>
        <Route index element={<Home/>}/>   {/* ✅ default */}
         <Route path='home' element={<Home/>}/>
        <Route path='studentlist' element={<StudentList/>}/>
        <Route path='favouritestudent' element={<FavouriteStudents/>}/>
      </Route>
  </Routes>
  )
}

export default App
