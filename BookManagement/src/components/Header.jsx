import React from 'react'
import {NavLink} from "react-router-dom"
const Header = () => {
    const navigation = [
        {path : '/' , name : 'List Book'},
        {path : '/add', name : 'Add Book'},
    ]

  return (
    <header>
        <h1>Book Management</h1>
        <nav>
            {navigation.map(navi=>(
                  <NavLink  key={navi.name} to={navi.path} >{navi.name}</NavLink>  
            ))}
        </nav>
    </header>
    )
}

export default Header