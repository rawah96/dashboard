import React from 'react';
import './SideMenu.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home, About, Contact} from '../../../components';

const SideMenu = props => (
    <nav className="side">
        <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
        </ul>

        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
    </nav>
)

export default SideMenu;