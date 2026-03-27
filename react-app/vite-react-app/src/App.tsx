
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'

import './App.css'
import AppBar from './components/AppBar'
import Home from './pages/Home'
import React, { Suspense } from 'react'

const Login = React.lazy(()=> import('./pages/Login'))

function App() {

  return (
    <Router>
      <div className="container">
    <AppBar/>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
 <Route path="/login" element={<Login/>}></Route>
      </Routes>
      </Suspense>
    </main>
    </div>
   </Router>
  )
}

export default App

