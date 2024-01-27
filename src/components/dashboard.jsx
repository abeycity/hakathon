import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import './global.css'
import Chat from './chats'
import Analytics from './analytics'
import Platforms from './platforms'
import Orders from './orders'

const Dashboard = () => {
  return (
  <div className='admin-container'> 
      <div className='navbar-component-container'>
          <Navbar/>
          <Sidebar/>
      </div>
    <div className="body-components">
    
        <Chat/>
      <Analytics/>
      <Orders/>
      <Platforms/>

    </div>
  </div>
    
  
  )
}

export default Dashboard