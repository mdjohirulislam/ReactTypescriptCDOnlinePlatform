import React, { Component } from 'react';
import Logo from '../OPHeader/images/logo.svg';
//import Logo from '../OPLogin/images/logo-2.svg'; 

function OPFooter () { 
   
      return (
        <>
            <footer className="ud-footer wow fadeInUp" data-wow-delay=".15s">
                 
                <div className="ud-footer-widgets">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-3 col-lg-4 col-md-6">
                        <div className="ud-widget">
                          <a href="/" className="ud-footer-logo">
                            <img src={Logo} alt="logo" />
                          </a>
                          <p className="ud-widget-desc">
                            We create digital experiences for brands and companies by
                            using technology.
                          </p>
                          <ul className="ud-widget-socials">
                            <li>
                              <a href="#">
                                <i className="lni lni-facebook-filled"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="lni lni-twitter-filled"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="lni lni-instagram-filled"></i>
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="lni lni-linkedin-original"></i>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div> 
                    </div>
                  </div>
                </div>
                <div className="ud-footer-bottom">
                  <div className="container">
                    <div className="row">
                      <div className="col-md-8">
                        <ul className="ud-footer-bottom-left">
                          <li>
                            <a href="#">Privacy policy</a>
                          </li>
                          <li>
                            <a href="#">Support policy</a>
                          </li>
                          <li>
                            <a href="#">Terms of service</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <p className="ud-footer-bottom-right">
                          Designed and Developed by
                         {/*  <a href="https://uideck.com" rel="nofollow">UIdeck</a> */}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          </footer> 

            <a href="#" className="back-to-top">
              <i className="lni lni-chevron-up"> </i>
            </a>

      </>
      );
   
  }
  
   
  export default  OPFooter; 
   