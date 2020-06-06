import React, {Component} from 'react';
import Sidebar from "react-sidebar";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {Home, About, Contact, DataTable, Side, WorldMap} from '../../components';
import style from './NavbarMenu.css'
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';

/*<Nav className="ml-auto">
                <Nav.Item><Link to={'/'} className="nav-link"> Home </Link></Nav.Item>
                <Nav.Item><Link to={'/contact'} className="nav-link">Contact</Link></Nav.Item>
    <Nav.Item><Link to={'/about'} className="nav-link">About</Link></Nav.Item>
            </Nav>*/

const NavbarMenu = () => {
    return (
      <header className="toolbar" style={{
        /*backgroundColor:'black',
        color:'white',
        marginBottom: '64px',
        marginTop: '64px',
        height: '80px'
      */}}>
        <nav className="toolbar_nav">
          {/*<div>
            <Side/>
          </div>*/}
          {/*hamburger icon*/}
          <div className="toolbar_logo"> LOGO </div>
          <div className="space"></div>
          {/* List for navigation items  -- router links */}
          <div className="toobar_nav-items">
          <ul>
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
            </ul>
          </div>
        </nav>
                
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/about' component={About} />
      </Switch>
      </header>
    )
}

  export default NavbarMenu
/*
  const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: #9FFFCB;
    &:hover { color: white; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
    width:100px
  }
`;*/
      /*
      didn't work
      <Router>
         <div>
            <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light"
            //className="col-md-12 d-none d-md-block bg-light sidebar"
            //activeKey="/home"
            //onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <Form className="form-center">
              <FormControl type="text" placeholder="Search" className="" />
    </Form>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Item><Link to={'/'} className="nav-link"> Home </Link></Nav.Item>
                <Nav.Item><Link to={'/contact'} className="nav-link">Contact</Link></Nav.Item>
                <Nav.Item><Link to={'/about'} className="nav-link">About</Link></Nav.Item>
              </Nav>
            </Navbar.Collapse>
            </Navbar>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
      </Router>*/
      /*<Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> Home </Link></li>
            <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
            <li><Link to={'/about'} className="nav-link">About</Link></li>
          </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>
      </div>
      </Router>*/

/*      return (
      <div className="wrapper">
        <nav id="sidebar">
        <div className="sidebar-header">
          Covid-19 Dashboard
        </div>
          <ul className="lisst-unstyled components">
            <li class="active">
              {/*<a href= "#homeSubMenu" data-toggle="collapse" aria-expand="false" class="dropdown-toggle">
              <Link to={'/'} className="nav-link"> Home </Link>
              <Link to={'/contact'} className="nav-link">Contact</Link>
              <Link to={'/about'} className="nav-link">About</Link>
              {/*</a>
              </li>
            {/*<ul className="collapse lisst-unstyled" id="homeSubMenu"></ul>
            </li>
            <li>
              <a href="#">About</a>
    </li>
    </ul>
        </nav>
        <hr />
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/contact' component={Contact} />
            <Route path='/about' component={About} />
        </Switch>


        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
            {/*<button type="button" id="sidebarCollapse" class="btn btn-info"
            >
            <span>toggle</span>
            </button>*
    </div>
    </nav>
        </div>
    </div>
    /*  <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/">Tutorial</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Form className="form-center">
          <FormControl type="text" placeholder="Search" className="" />
        </Form>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
            <Nav.Item><Nav.Link href="/about">About</Nav.Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
    )
  }
}

export default NavbarMenu*/
/*         <Router>
          <div>
            <nav /*className="navbar navbar-expand-lg navbar-light bg-light"
            className="col-md-12 d-none d-md-block bg-light sidebar"
            activeKey="/home"
            onSelect={selectedKey => alert(`selected ${selectedKey}`)}
            >
            <div className="sidebar-sticky"></div>
              <ul className="navbar-nav mr-auto">
                <li><Link to={'/'} className="nav-link"> Home </Link></li>
                <li><Link to={'/contact'} className="nav-link">Contact</Link></li>
                <li><Link to={'/about'} className="nav-link">About</Link></li>
              </ul>
            </nav>
            <hr />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
            </Switch>
          </div>
          </Router> */