 
import React, { Component} from 'react';
import axios from 'axios';  
 

 
class OPMiniProfile extends Component {
    state = {
      starships: [],
      loading: true,
      error: false  
    }
    
    async componentWillMount () {
       
      if(sessionStorage.getItem("userData")===null)
      {
          
        const accessToken = sessionStorage.getItem("access_token") as string;
        const headers = { 
          Authorization: `Bearer `+accessToken,
          Accept: 'application/json', 
        };  
        console.log("OP Mini profile called api get-customers-details  function called ");
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
            <a href="/personal-details"> {person?.['contacts'][0]['first_name']} {person?.['contacts'][0]['last_name']} </a> 
          </>  
          }          
          {error && <div> ## Error ##</div>}
        </div>
      );
    }
  };
  export default  OPMiniProfile;