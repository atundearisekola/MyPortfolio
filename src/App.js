import React from 'react';
import { Layout, Header, Navigation, Drawer, Content, Button } from 'react-mdl';
import logo from './logo.svg';
import './App.css';
import './sass/main.scss';

import Main from './components/Main';
import { NavLink, Link } from 'react-router-dom';

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header
          style={{ color: 'white' }}
          className="header"
          title={
            <span>
              <NavLink className="header--link" to="/">
                Atunde Arisekola{' '}
              </NavLink>
            </span>
          }
        >
          <Navigation className="header--nav">
            <NavLink to="/resume">Resume </NavLink>

            <NavLink to="/projects">Projects </NavLink>
            <NavLink to="/contact">Contact </NavLink>
            <a className=" btn-text btn--green">Download CV</a>
          </Navigation>
        </Header>
        <Drawer
          title={
            <span>
              <NavLink to="/">Atunde Arisekola </NavLink>
            </span>
          }
        >
          <Navigation>
            <NavLink to="/resume">Resume </NavLink>

            <NavLink to="/projects">Projects </NavLink>
            <NavLink to="/contact">Contact </NavLink>
            <a button className="btn btn--green">
              Download CV
            </a>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
