import React from 'react'
import {
    BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
    BsListCheck, BsMenuButtonWideFill, BsFillGearFill
} from 'react-icons/bs'
import { Link } from 'react-router-dom'

function SideBar({ openSidebarToggle, OpenSidebar }) {
    return (
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
            <h2>Sidebar</h2>
            <div className='sidebar-title'>
                <div className='sidebar-brand'>
                    <BsCart3 className='icon-header' /> SHOP
                </div>
                <span className='icon close-icon' onClick={OpenSidebar}>X</span>
            </div>
            <ul className='sidebar-list'>
                <li className='sidebar-item'>
                    <a href="/">
                        <BsGrid1X2Fill className='icon' /> Tableau de bord
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/produits">
                        <BsFillArchiveFill className='icon' /> Produits
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/categories">
                        <BsFillGrid3X3GapFill className='icon' /> Categories
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/clients">
                        <BsPeopleFill className='icon' /> Clients
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/inventaire">
                        <BsListCheck className='icon' /> Inventaire
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/rapports">
                        <BsMenuButtonWideFill className='icon' /> Rapports
                    </a>
                </li>
                <li className='sidebar-item'>
                    <a href="/parametres">
                        <BsFillGearFill className='icon' /> Parametres
                    </a>
                </li>
            </ul>
        </aside>
    )
}

export default SideBar
