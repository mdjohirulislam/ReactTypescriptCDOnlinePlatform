 
import React, { Component} from 'react';
import axios from 'axios';  
import {Link} from 'react-router-dom';

function handleSubmit(e:any) {
    e.preventDefault();
    window.location.href = '/add-payee';
  }

  function handleLogout(e:any) {
    e.preventDefault();
    sessionStorage.clear();
    window.location.href = '/';
  }
class OPUserData extends Component {
    state = {
      starships: [],
      loading: true,
      error: false  
    }
    
    async componentDidMount() {
       
      if(sessionStorage.getItem("userData")===null)
      {
          
        const accessToken = sessionStorage.getItem("access_token") as string;
        const headers = { 
          Authorization: `Bearer `+accessToken,
          Accept: 'application/json', 
        };  
        console.log("/api/get-customers-details/ function called ");
      await axios.get("/api/get-customers-details/",{headers})
        .then(response => response.data)        
        .then(response => this.setState({ 
          starships: response.data,
          loading: false, 
        }))
        .catch(error => this.setState({ 
          loading: false, 
          error: true,
          errorMessage :error.data
        }));

        
      }
      else{ 
        const data = sessionStorage.getItem("userData") as string;   
        this.setState({ 
          starships: JSON.parse(data), 
          loading: false,           
        })  
      }  
    }
  
    render () {
    const { starships, loading, error} = this.state; 
      
    let data  = JSON.stringify(starships);
    let person = JSON.parse(data);  
      
      return (
        <div>
          {loading && <div>Loading...</div>}
          {!loading && !error && 
          <> 
            {
                sessionStorage.getItem("userData")===null && sessionStorage.setItem("userData",JSON.stringify(starships))
            } 

                <ul id="nav" className="navbar-nav mx-auto"> 
                    <li className="nav-item">
                        <a className="ud-menu-scroll" href="/make-transfer">Transfer</a>
                    </li> 
                    <li className="nav-item">
                        <a className="ud-menu-scroll" href="#about">Top-up</a>
                    </li>
                    <li className="nav-item">
                        <a className="ud-menu-scroll" href="#pricing">Recipients</a>
                    </li>
                    <li className="nav-item">
                        <a className="ud-menu-scroll" href="#team">Activity</a>
                    </li>
                    <li className="nav-item">
                        <a className="ud-menu-scroll" href="#contact">Rate alerts</a>
                    </li>
                    <li className="nav-item nav-item-has-children"> 
                     <a href="#">  {person?.['contacts'][0]['first_name']}  {person?.['contacts'][0]['last_name']}</a>
                     <ul className="ud-submenu"> 
                        <li className="ud-submenu-item">
                        
                        <a href="#" className="ud-submenu-link">
                        ID :  {person?.['customer_id']}  
                        </a>
                        </li> 
                        <li className="ud-submenu-item">
                        <a href="#" className="ud-submenu-link">
                            
                        </a>
                        </li>
                        <li className="ud-submenu-item">
                        <a href="/personal-details" className="ud-submenu-link">
                            Profile management
                        </a>
                        </li>
                        <li className="ud-submenu-item">
                        <a href="#" className="ud-submenu-link">
                            
                        </a>
                        </li>
                        <li className="ud-submenu-item">
                        <a href="#" className="ud-submenu-link" onClick={handleLogout}>Log out</a>
                        </li>
                    </ul>
            </li> 
                </ul> 
             
          </>  
          }

          
          {error && <div> ## Error ##</div>}
        </div>
      );
    }
  };
  export default  OPUserData;