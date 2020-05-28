import React from 'react';
import { Layout,Header,Navigation,Drawer,Content} from 'react-mdl';
import logo from './logo.svg';
import './App.css';
import Main from "./components/Main"
import {NavLink,Link } from 'react-router-dom'

function App() {
  return (
    <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={ <span>
            <NavLink   to="/">Atunde Arisekola </NavLink >
        </span>} >
            <Navigation>
                <NavLink  to="/resume">Resume </NavLink >
                
                <NavLink  to="/projects">Projects </NavLink >
                <NavLink  to="/contact">Contact </NavLink >
            </Navigation>
        </Header>
        <Drawer title={ <span>
            <NavLink   to="/">Atunde Arisekola </NavLink >
        </span>}>
        <Navigation>
                <NavLink  to="/resume">Resume </NavLink >
                
                <NavLink  to="/projects">Projects </NavLink >
                <NavLink  to="/contact">Contact </NavLink >
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
