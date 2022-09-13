 
import React, { useEffect, useState, useRef } from 'react'; 
import { useForm } from "react-hook-form";
import axios from 'axios'; 

const accessToken = sessionStorage.getItem("access_token") as string;
function handleSubmit11(e:any) {
    e.preventDefault();
    window.location.href = '/add-payee';
  }

   
function OPAddPayee () { 
    
      type FormData = {
        firstName: string;
        lastName: string;
        country_code:string;
        currency:string;
        email?:string;
        flexRadioDefault?:string
      };
      
      type ContactForm = {
        name: string;
        email: string;
        phonenumber: string;
      };
       // Form submittion process
       const commentsRef = useRef(null);
       const [comments, setComments] = useState([]);
       const [error, setError] = useState(null);
       const { register, handleSubmit, formState: { errors } } = useForm();

       
       const onSubmit = async (data : any,e:any ) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '+accessToken, }, 
            data :JSON.stringify(data)
        };
    
        
        await axios("/api/create-new-recipients/", requestOptions)
        .then((response) => {
          if (response.status == 200)
          {
            e.target.reset();
            sessionStorage.removeItem("userRecipients");
            sessionStorage.removeItem("meta_data");
            window.location.href = '/dashboard';
          }
        })

    
        //console.log(jsonData);
    } 

      return (

        <>
          <section className="ud-page-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-banner-content">
                  <h1>Recipient details</h1>
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
                
                <h3>Add your recipient</h3>
                <p>Add your recipient’s details below – you’ll need to continue to the last page to save any details.</p> 
                <p> &nbsp; </p>
                <div className="ud-404-content">  
                <form id="contactForm" onSubmit={handleSubmit(onSubmit)} className="p-3 border bg-light">
                     
                        <input type="hidden"  {...register("type", { required: true,value:'Individual', maxLength: 100 })}/>
                        <h5 className="small-8" style={{float:'left'}}>Recipient type</h5> 
                        <p> &nbsp; </p>
                        <div className="mb-3 col-md-6 medium-4 columns radio-container">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked  value='Individual'/>

                        <label className="form-check-label" htmlFor="flexRadioDefault2" style={{float:'left'}}>Individual</label>
                        </div>

                        <div className="mb-3 col-md-6 medium-4 columns radio-container">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value='Company'/>
                          <label className="form-check-label" htmlFor="flexRadioDefault1" style={{float:'left'}}>Company</label>
                        </div> 
                          <hr/>

                     
                    <p> &nbsp; </p>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="first_name">Full name of the recipient </label>

                        <input className="form-control" type="text" placeholder="First name" {...register("name", { required: true, maxLength: 50 })} defaultValue="" />
                    </div>
                   {/*  <div className="mb-3">
                        <label className="form-label" htmlFor="last_name">Last name</label>

                        <input className="form-control" type="text" placeholder="Last name" {...register("last_name", { required: true, maxLength: 100 })} defaultValue={''}/>
                    </div> */}
                     

                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">Email Address</label> 
                        <input className="form-control" type="text" placeholder="Email address (optional)" {...register("email", {   pattern: /^\S+@\S+$/i })} defaultValue={''} />
                    </div> 
                    <div className="mb-3">
                        <label className="form-label mdb-select md-form" htmlFor="country">Select country</label> 
                        <select    {...register("country_code", { required: true,})}     tabIndex={-1} data-live-search="true" className="form-select form-select-lg shadow-none bg-light border-0">
                            {/* <option selected={true}    value="">&nbsp;</option>  */}
                            <option value="AUS">Australia</option>
                            <option value="CHN">China</option> 
                            <option value="FRA">France</option>
                            <option value="DEU">Germany</option>
                            <option value="DEU">Greece</option>
                            <option value="HKG">Hong Kong</option>
                            <option value="JPN">Japan</option>
                            <option value="NZL">New Zealand</option>
                            <option value="PRT">Portugal</option>
                            <option value="ESP">Spain</option>
                            <option value="GBR">United Kingdom</option>
                            <option value="USA">United States of America</option> 
                      
                            <option value="IND">India</option> 
                            <option value="ISR">Israel</option>
                            <option value="ZAF">South Africa</option>
                            <option value="TUR">Turkey</option>
                            
                        </select>
                    </div>

                    <div className="mb-3">
                    <label className="form-label mdb-select md-form" htmlFor="Currency">Select currency</label> 
                    <select  id="step2_select3" name="currency" aria-hidden="true" data-live-search="true" tabIndex={-1} className="form-select form-select-lg shadow-none bg-light border-0">
                       {/*  <option selected={true}    value="">&nbsp;</option>  */}
                        <option value="AED">AED-UAE Dirham</option>
                        <option value="AUD">AUD-Australian Dollar **</option>
                        <option value="CAD">CAD-Canadian Dollar **</option>
                        <option value="CHF">CHF-Swiss Franc</option>
                        <option value="CZK">CZK-Czech Koruna</option>
                        <option value="DKK">DKK-Danish Krone</option>
                        <option value="EUR">EUR-Euro</option>
                        <option value="GBP">GBP-Sterling Pound</option>
                        <option value="HKD">HKD-Hong Kong Dollar</option>
                        <option value="HRK">HRK-Croatian Kuna</option>
                        <option value="HUF">HUF-Hungary Forint</option>
                        <option value="ILS">ILS-New Israeli Shekel</option>
                        <option value="INR">INR-Indian Rupee</option>
                        <option value="JPY">JPY-Japanese Yen</option>
                        <option value="MXN">MXN-Mexican Peso</option>
                        <option value="NOK">NOK-Norwegian Krone</option>
                        <option value="NZD">NZD-New Zealand Dollar **</option>
                        <option value="PLN">PLN-Polish Zloty</option>
                        <option value="RON">RON-Romanian  New Lei</option>
                        <option value="SEK">SEK-Swedish Krona</option>
                        <option value="SGD">SGD-Singapore Dollar</option>
                        <option value="THB">THB-Thai Baht</option>
                        <option value="USD">USD-US Dollar **</option>
                        <option value="ZAR">ZAR-South African Rand **</option> 
                    </select>
                </div>

                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">Address </label> 
                        <input className="form-control " type="text" placeholder="Address" {...register("address[address_line]", { required: true, maxLength: 140 })} defaultValue="" />
                </div>
                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">City </label> 
                        <input className="form-control " type="text" placeholder="City" {...register("address[city]", { required: true, maxLength: 40 })} defaultValue="" />
                </div>
                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">State </label> 
                        <input className="form-control " type="text" placeholder="State" {...register("address[state]", { required: true, maxLength: 50 })} defaultValue="" />
                </div>
                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">Post code </label> 
                        <input className="form-control " type="text" placeholder="Post code" {...register("address[post_code]", { required: true, maxLength: 14 })} defaultValue="" />
                </div>

                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">Currency</label> 
                        <input className="form-control " type="text" placeholder="Currency" {...register("recipient_bank_details[currency]", { required: true, maxLength: 40 })} defaultValue="" />
                </div>   
                <div className="mb-3 ">
                        <label className="form-label" htmlFor="iban">IBAN</label> 
                        <input className="form-control " type="text" placeholder="IBAN" {...register("recipient_bank_details[iban]", { required: true, maxLength: 100 })} defaultValue="" />
                </div>
 
               

                  
                    <div className="d-grid">
                        <button className="ud-main-btn w-100" type="submit" >Submit</button>
                    </div> 

                </form> 

 
                         
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </> 
      );
   
  }
  
   
  export default  OPAddPayee;
