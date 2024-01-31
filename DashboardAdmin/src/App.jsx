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
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'

function App() {
  // const colonnes = [
  //   {
  //     nom: 'Nom',
  //     seletor: row => row.nom
  //   },
  //   {
  //     email: 'Email',
  //     seletor: row => row.email
  //   },
  //   {
  //     adresse: 'Adrese',
  //     seletor: row => row.adresse
  //   },
  //   {
  //     telephone: 'Telephone',
  //     seletor: row => row.telephone
  //   },
  //   {
  //     salaire: 'Salaire',
  //     seletor: row => row.salaire
  //   },
  //   {
  //     post: 'Post',
  //     seletor: row => row.post
  //   },


  // ];
  // const donnees = [
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  //   {
  //     nom: 'Gning Yussuf',
  //     email: 'gningyussuf@gmail.com',
  //     adresse: 'Repentigny',
  //     telephone: 28374747474,
  //     salaire: 50000,
  //     post: 'Develppeur'
  //   },
  // ]
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)
  // fonction d'ouverture et de fermiture du menu sidebar
  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className="grid-container">
      
      <Header OpenSidebar={OpenSidebar} />
      <SideBar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <BrowserRouter >
        <Outlet />
        <Routes>
          <Route path='/produits' element={<Produits />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/inventaire' element={<Inventaire />} />
          <Route path='/rapports' element={<Rapport />} />
          <Route path='/parametres' element={<Parametres />} />
          <Route path='/*' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
