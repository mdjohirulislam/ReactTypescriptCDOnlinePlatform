 
import React, { Component} from 'react';
import axios from 'axios';  
import {Link} from 'react-router-dom';

function handleSubmit(e:any) {
    e.preventDefault();
    window.location.href = '/add-payee';
  }
class OPRecipients extends Component {
    state = {
      starships: [],
      loading: true,
      error: false ,
      metaData: [],
      errorMessage :[]
       
    }
    
    async componentDidMount () {
       
      if(sessionStorage.getItem("userRecipients")===null)
      {
        const accessToken = sessionStorage.getItem("access_token") as string;
        const headers = { 
          Authorization: `Bearer `+accessToken,
          Accept: 'application/json', 
        };
        console.log("userRecipients api call");  
      await axios.get("/api/get-all-recipients/",{headers})
        .then(response => response.data)        
        .then(response => this.setState({ 
          starships: response.recipients,
          loading: false,
          metaData:response.meta_data,
        }))
        .catch(error => this.setState({ 
          loading: false, 
          error: true,
          errorMessage :error.data
        }));

      }
      else{
        const data = sessionStorage.getItem("userRecipients") as string; 
        const meta_data = sessionStorage.getItem("meta_data") as string;
         
        this.setState({ 
          starships: JSON.parse(data),
          loading: false,
          metaData : JSON.parse(meta_data),
        })  
      } 
    }
  
    render () {
      const { starships, loading, error,metaData,errorMessage } = this.state;  
      const recipientsJSX = starships.map((recipient: { name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; country_code: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;  recipient_id: string ; recipient_bank_details: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; ibna: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined;}) => {
        // we return JSX for each recipient in the array which we store in the recipient variable, essentially we are looping over recipient of recipients
        let url = "/payee-details/?id="+recipient?.recipient_id;
        var recip = (JSON.stringify(recipient.recipient_bank_details)); //(JSON.stringify(recipient.recipient_bank_details).split('iban')[1]).split(',')[0].slice(3,-1);
        if(recip.includes('iban') == true)
        {
          recip = (JSON.stringify(recipient.recipient_bank_details).split('iban')[1]).split(',')[0].slice(3,-1);
        }
        else
        {
          recip = (JSON.stringify(recipient.recipient_bank_details).split('account_number')[1]).split(',')[0].slice(3,-1);
        }
        let CountryImage = "https://flagcdn.com/32x24/"+((recipient?.country_code)?.toString().toLowerCase())?.slice(0,2)+".png";
        return (
          < > 
           
          <tr>
            <td>{recipient?.name}</td>
            <td><img src={CountryImage} alt="eu flag" className="w-5 h-5 rounded-full object-cover md:mr-2" /> </td>
            <td>****{ recip.slice(-4) }   </td>
           {/*  <td><a className="button-simple button-simple-inline" href="#" style={{color: 'var(--bs-link-hover-color)'}}><span>Transfer</span></a></td> */}
            <td><a className="button-simple button-simple-inline" href= {url} style={{color: 'var(--bs-link-hover-color)'}}><span>Show</span></a></td>
        </tr>
          </>
        )
      })
       
      
     
      return (
        <div>
          {loading && <div>Loading...</div>}
          {!loading && !error && 
          <>
            <h3>Your recipients</h3>
            <p>Make a transfer to an existing recipient or add a new one.</p>
            <p>&nbsp;</p>

            <p>&nbsp;</p>
            
     
            <table className='table table-striped'><tbody>
            
            {recipientsJSX}  
            </tbody></table> 
            <p>&nbsp;</p>
              {sessionStorage.getItem("userRecipients")===null &&
              sessionStorage.setItem("userRecipients",JSON.stringify(starships))
              } 
              {sessionStorage.getItem("meta_data")===null &&
              
              sessionStorage.setItem("meta_data",JSON.stringify(metaData))
              }  
            <div className="ud-form-group d-sm-inline-block"><button type="submit" className="ud-main-btn w-100 " onClick={handleSubmit}>Add recipient</button></div>
          </>  
          }
          {error && <div> ## {errorMessage} ##</div>}
        </div>
      );
    }
  };
  export default  OPRecipients;