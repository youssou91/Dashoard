// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import SideBar from './SideBar'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  // fonction d'ouverture et de fermiture du menu sidebar
  const OpenSidebar = () =>{
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      <Header OpenSidebar={OpenSidebar} />
      <SideBar  openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <Home />
    </div>
  )
}

export default App
