import React, { Component } from 'react';

function OPFooter () { 
   
      return (

        <>
          <section className="ud-page-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-banner-content">
                  <h1>404 Page</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
 
        <section className="ud-404">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-404-wrapper">
                  <div className="ud-404-content">                
                    <h2 className="ud-404-title">404 - We couldn't find that page.</h2>
                    <h5 className="ud-404-subtitle">
                    That page doesn't exist!
                    </h5>
                    <span className="mb-2 block text-lg font-semibold text-primary">
                    Maybe you can find what you need here?
                    </span>
                    <ul className="ud-404-links">
                      <li>
                        <a href="/">Login</a>
                      </li> 
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </> 
      );
   
  }
  
   
  export default  OPFooter;
