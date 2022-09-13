/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component ,Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import { Navbar,Container,Nav,NavDropdown } from 'react-bootstrap';
import NotFound from '../OPNotFound/OPNotFound';
import Login from '../OPLogin/OPLogin';
import Logo from './images/logo.svg'; 
import Dashbord from '../OPDashbord/OPDashbord';
import {LogInUserMenu,LogInUserMenuWithout} from '../../core/api/apiFunctionCall'; 
import UserData from '../OPUserData/OPUserData';
import ProfileManager from '../OPProfileManager/OPProfileManager';
import MakeTransfer from '../OPMakeTransfer/OPMakeTransfer';
import AddPayee from '../OPAddPayee/OPAddPayee';
import PayeeDetails from '../OPAddPayeeDetails/OPAddPayeeDetails';
//OPMakeTransfer

function OPHeader () { 
  //console.log("OPHeader called"); 
  var urlPath = "/";
  
  if(sessionStorage.getItem("userData")) { 
   urlPath = "/dashboard";
  }

  let path = window.location.pathname;
      return (
        <>
        <Router>
          <header className="ud-header">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <nav className="navbar navbar-expand-lg"> 
                     <a className="navbar-brand" href={urlPath}>
                      <img src={Logo} alt="Logo" style={{minHeight: '55px'}} />
                    </a>
                    <button className="navbar-toggler">
                      <span className="toggler-icon"> </span>
                      <span className="toggler-icon"> </span>
                      <span className="toggler-icon"> </span>
                    </button>

                    <div className="navbar-collapse">  
                      { path!= "/" && <UserData/> }   
                    </div>

                    <div className="navbar-btn d-none d-sm-inline-block">
                      <a href="/" className="ud-main-btn ud-login-btn">
                        Sign In
                      </a>
                      <a className="ud-main-btn ud-white-btn" href="#">
                        Sign Up
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            </div>
          </header>
   
        <Routes>
          <Route path="/" element={<Login/>}> </Route>
          <Route path="/personal-details" element={<ProfileManager/>}></Route> 
          <Route path="/dashboard" element={<Dashbord/>}></Route>
          <Route path="/make-transfer" element={<MakeTransfer/>}></Route>
          <Route path="/add-payee" element={<AddPayee/>}></Route>
          <Route path="/payee-details" element={<PayeeDetails/>}></Route> 
          <Route path="*" element={<NotFound/>} ></Route>
        </Routes>
      </Router>
      </>
      );
  }
export default  OPHeader;
  
 