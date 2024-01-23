// import { useState } from 'react'
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Home from './Home'
import SideBar from './SideBar'
import Produits from './Components/Produits'
import Clients from './Components/Clients'
import Categories from './Components/Categories'
import Inventaire from './Components/Inventaire'
import Rapport from './Components/Rapport'
import Parametres from './Components/Parametres'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/produits' element={<Produits />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/inventaire' element={<Inventaire />} />
          <Route path='/rapports' element={<Rapport />} />
          <Route path='/parametres' element={<Parametres />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
