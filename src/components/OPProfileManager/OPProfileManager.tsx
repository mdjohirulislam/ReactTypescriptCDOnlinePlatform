import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
/* import ContactForm from './OPContactForm';
import ContactList from "./ContactList";
 */

import { useForm } from "react-hook-form";

const accessToken = sessionStorage.getItem("access_token") as string;
const userData = sessionStorage.getItem("userData") as string;
let users = JSON.parse(userData);



   
function OPProfileManager () { 
    type FormData = {
        firstName: string;
        lastName: string;
      };
      
      type ContactForm = {
        
        email: string;
        phone_number: string;
      };
       // Form submittion process
       const commentsRef = useRef(null);
       const [comments, setComments] = useState([]);
       const [error, setError] = useState(null);
       const { register, handleSubmit, formState: { errors } } = useForm();
       
       
       const onSubmit = async (data : any,e:any) => {
        e.preventDefault();
       alert(JSON.stringify(data));

       // PUT request using axios with set headers
    const body = JSON.stringify(data);
    const headers = { 
        'Authorization': 'Bearer '+accessToken,
        'Content-Type':'application/json', 'Accept':'application/json',
    };
     
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json', Authorization: 'Bearer '+accessToken, }, 
      data :JSON.stringify(data)
  };
  /*   async () => {
        const res = await axios.put('/api/update-contact/', body, { headers }); 
        const data = await res.data;
        console.log("api/update-contact/  ==================== " + data );
      } */

      await axios("/api/update-contact/", requestOptions)
      .then((response) => {
        if (response.status == 200)
        {
          e.target.reset();
          
          sessionStorage.removeItem("userData");
          window.location.href = '/dashboard';
        }
      })
      };

      var date_Of_Birth = users['contacts'][0]['date_of_birth']; 
      var dateData = date_Of_Birth.split('-');

      return (

        <>
          <section className="ud-page-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-banner-content">
                  <h1>Personal details</h1>
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
                <h1> Your profile </h1>
            <p>Check and update your account information and email preferences.</p> 
                  <div className="ud-404-content">    
 
                    <nav>
                      <div className="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                        <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Your details</button>
                        <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Account details</button>
                        <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Email peferences</button>
                        <button className="nav-link" id="nav-device-tab" data-bs-toggle="tab" data-bs-target="#nav-device" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Your devices</button>
                        <button className="nav-link" id="nav-banking-tab" data-bs-toggle="tab" data-bs-target="#nav-banking" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Open Banking</button>
                      </div>
                    </nav> 
		<div className="tab-content p-3 border bg-light" id="nav-tabContent">

       
			<div className="tab-pane fade active show" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
				
                    <form id="contactForm" onSubmit={handleSubmit(onSubmit)} >


                    <div className="mb-3">
                        <label className="form-label" htmlFor="first_name">First and middle name</label>

                        <input className="form-control read-only" type="text" placeholder="First name" value={users['contacts'][0]['first_name']} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="last_name">Last name</label>

                        <input className="form-control read-only" type="text" placeholder="Last name"  value={users['contacts'][0]['last_name']} />
                    </div>
                    <div className="mb-3"> 
                        <div className="row">
                            <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Day</label>
                            <input className="form-control read-only" type="text" placeholder="Day"   value={dateData[2]} />
                            </div>
                            <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Month</label>
                            <input className="form-control read-only" type="text" placeholder="Month"   value={dateData[1]} />
                            </div>
                            <div className="col-md-4">
                            <label className="form-label" htmlFor="email">Year</label>
                            <input className="form-control read-only" type="text" placeholder="Year"   value={dateData[0]} /> 
                            </div>
                        </div>
                    </div>
                  <hr/>
                  <p> &nbsp;</p>
                  <div className="mb-3">
                      <label className="form-label" htmlFor="occupation">Occupation</label>
                      <input className="form-control" type="text" placeholder="Occupation" {...register("occupation", { value: users['contacts'][0]['occupation'], required: true })} />
                  </div>
                  <p> &nbsp;</p>
                  <hr/>
                  <p> &nbsp;</p>
                  <strong style={{float: 'left'}}>Contact details</strong>  
                  <p> &nbsp;</p>
                    <div className="mb-3"> 
                        <label className="form-label" htmlFor="Country">Country</label>
                        <input className="form-control" type="text" placeholder="Country" {...register("address[country]", { value: users['contacts'][0]['address']['country'], required: true })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Address">Address</label>
                        <input className="form-control" type="text" placeholder="Address" {...register("address[street]", { value: users['contacts'][0]['address']['street'], required: true })} />
                    </div>

                    <div className="mb-3">
                        <label className="form-label" htmlFor="City">City</label>
                        <input className="form-control" type="text" placeholder="City" {...register("address[city]", { value: users['contacts'][0]['address']['city'], required: true })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Country">Country (optional)</label>
                        <input className="form-control" type="text" placeholder="Country (optional)" {...register("address[state]", { value: users['contacts'][0]['address']['state'], required: false })} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="Postcode">Post code</label>
                        <input className="form-control" type="text" placeholder="Post code" {...register("address[post_code]", { value: users['contacts'][0]['address']['post_code'], required: true })} />
                    </div> 
                   
                    <div className="mb-3">
                        <label className="form-label" htmlFor="mobile_number">Mobile number</label>
                        <input className="form-control read-only" type="text" placeholder="Mobile number"  value={users['contacts'][0]['mobile_number']} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="phone_number">Landline number</label>
                        <input className="form-control read-only" type="text" placeholder="Phone number"  value={users['contacts'][0]['phone_number']} />
                        <p>&nbsp;</p><label className="form-label" htmlFor="Phoneumber_info">If you need to update your phone number please give us a call on <a href="tel:+442078479494" style={{color: 'var(--bs-link-color)'}}>+44 (0) 20 7847 9494</a>.</label>
                    </div>

                    
                   <div className="mb-3">
                        <button className="ud-main-btn w-100" type="submit" >Submit</button>
                    </div> 
                  </form>  
                   
			</div>

{/* /////Accounr details tab */}    
			<div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">


         
           <strong style={{float: 'left'}}>Account details</strong>   
          <p> &nbsp;</p>
          <p> &nbsp;</p>
        <div className="mb-3">
            <label className="form-label" htmlFor="status">This details for primary contact</label>
            <input className="form-control read-only" type="text" placeholder="Primary contact"  value={users['contacts'][0]['primary_contact']} />
        </div>
                   
          <p> &nbsp;</p>
          <hr/>
          <p> &nbsp;</p>
           <strong style={{float: 'left'}}>Login details</strong>   
          <p> &nbsp;</p>
          <p> &nbsp;</p>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email Address</label>
            <input className="form-control read-only" type="text" placeholder="Email"  value={users['contacts'][0]['email']} />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">Password</label>
            <input className="form-control read-only" type="text" placeholder="Password"   value={'**************'} />
          </div>
          <p> &nbsp;</p>
          <hr/>
          <p> &nbsp;</p>
          
			</div>

 {/* /////Email preference  tab */}        
			<div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
				<p><strong>This is some placeholder content the Contact tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next.
					The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
					tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
			</div>
      <div className="tab-pane fade" id="nav-device" role="tabpanel" aria-labelledby="nav-contact-tab">
				<p><strong>This device is some placeholder content the device tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next.
					The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
					tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
			</div>
      <div className="tab-pane fade" id="nav-banking" role="tabpanel" aria-labelledby="nav-contact-tab">
				<p><strong>This banking is some placeholder content the device tab's associated content.</strong>
					Clicking another tab will toggle the visibility of this one for the next.
					The tab JavaScript swaps classes to control the content visibility and styling. You can use it with
					tabs, pills, and any other <code>.nav</code>-powered navigation.</p>
			</div>

		</div> 
                         
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        </> 
      );
   
  }
  
   
  export default  OPProfileManager;
