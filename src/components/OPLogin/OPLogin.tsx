import React, { Component } from 'react';
import Logo from './images/logo-2.svg';
 
function handleSubmit(e:any) {
  e.preventDefault();
  window.location.href = '/dashboard';
}
class OPLogin extends Component {

  
    render() {
     
      //console.log("OPLogin !!!called");
      return (
         
<>
    <section className="ud-page-banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="ud-banner-content">
              <h1>Login Page</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
      <section className="ud-login">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="ud-login-wrapper">
                <div className="ud-login-logo">
                  <img src={Logo} alt="logo" />
                </div>
                <form className="ud-login-form">
                  <div className="ud-form-group">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email/username"
                    />
                  </div>
                  <div className="ud-form-group">
                    <input
                      type="password"
                      name="password"
                      placeholder="*********"
                    />
                  </div>
                  <div className="ud-form-group">
                    <button type="submit" className="ud-main-btn w-100" onClick={handleSubmit}>Login</button>
                  </div>
                </form>

                <div className="ud-socials-connect">
                  <p>Connect With</p>

                  <ul>
                    <li>
                      <a href="#" className="facebook">
                        <i className="lni lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="twitter">
                        <i className="lni lni-twitter-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="google">
                        <i className="lni lni-google"></i>
                      </a>
                    </li>
                  </ul>
                </div>

                <a className="forget-pass" href="#">
                  Forget Password?
                </a>
                <p className="signup-option">
                  Not a member yet? <a href="#"> Sign Up </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
</>
      
      );
    }
  }


  export default  OPLogin;
