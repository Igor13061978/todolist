import React, { useContext } from 'react'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

import './Navbar.css'


export const Navbar = () => {
    const history = useHistory()
    const auth = useContext(AuthContext)

    const logoutHandler = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
    }


    return (
        <div className="navbar col xl12 l12 m12 s12">
            <ul>
                <li className="screen-large"><NavLink to="/createnotes" >Ввести дело</NavLink></li>
                <li className="screen-large"><NavLink to="/rednotes" >Неисполненные</NavLink></li>
                <li className="screen-large"><NavLink to="/greennotes">Исполненные</NavLink></li>
                <li className="screen-large"><a href="/" onClick={logoutHandler} >Выйти</a></li>
                <li className="screen-small"><NavLink to="/createnotes"><i class="material-icons">add_circle</i></NavLink></li>
                <li className="screen-small"><NavLink to="/rednotes"><i class="material-icons red" >pageview</i></NavLink></li>
                <li className="screen-small"><NavLink to="/greennotes"><i class="material-icons green">pageview</i></NavLink></li>
                <li className="screen-small"><a href="/" onClick={logoutHandler}><i class="material-icons">exit_to_app</i></a></li>
            </ul>
        </div>




    )
}

