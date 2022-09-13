import React, { Component } from 'react';
import { format } from 'date-fns';
import Avator from './assets/blog/author-01.png';
//import {QuoteUserData, QuoteUserDataWithout} from '../../core/api/apiFunctionCall'; 
import CurrencyRates from '../OPCurrencyRates/OPCurrencyRates';
import TopUpWallet from './assets/blog/TopUpWallet.png';
import MiniProfile from '../OPMiniProfile/OPMiniProfile';
import TransferButton from './assets/blog/TransferButton.png';

import Recipients from '../OPRecipients/OPRecipients'; 
const dateToday = format(new Date(), 'PPPP');

function handleMakeTransferSubmit(e:any) {
  e.preventDefault();
  window.location.href = '/make-transfer';
}

class OPDashbord extends Component {
   
      render() { 
        console.log("OPDashbord !!!called"); 
        return (         
              <>
             
                <section className="ud-page-banner">
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="ud-banner-content">
                          <h1>Dash board </h1>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div className="container">
                    <div className="row"> 
                      <div className="col-lg-12">
                        <div className="ud-blog-details-image"> 
                          <div className="ud-blog-overlay">
                            <div className="ud-blog-overlay-content">
                              <div className="ud-blog-author">
                                <img src={Avator} alt="author" />
                                <span>
                                   <MiniProfile/>  
                                </span>
                              </div>
                              <div className="ud-blog-meta">
                                <p className="date">
                                  <i className="lni lni-calendar"></i> <span>{ dateToday }</span>
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="ud-blog-sidebar">
                          <CurrencyRates/>    
                          <p>&nbsp; </p>
                           <p>&nbsp; </p>
                        </div>
                      </div>
  
                      
                      <div className="col-lg-8">
                  
                        <div className="ud-blog-details-content"> 
                          <div className="row">
                            <div className="col-md-6">
                            <button type="submit" onClick={handleMakeTransferSubmit} >
                                 <img src={TransferButton} alt="logo" style={{border: '3px solid #e2ebe970'}} />
                            </button>
                            </div>
                            <div className="col-md-6">
                            <button type="submit"  onClick={handleMakeTransferSubmit}>
                             <img src={TopUpWallet} alt="logo" style={{border: '3px solid #e2ebe970'}}/>
                             </button>
                            </div> 
                          </div>
                        <Recipients /> 
                           <p>&nbsp; </p>
                           <p>&nbsp; </p>
                         {/*  <h2 className="ud-blog-details-title">
                            Facing a challenge is kind of a turn-on for an easy rider
                          </h2>
                          <p className="ud-blog-details-para">
                            There’s a time and place for everything… including asking for
                            reviews. For instance: you should not asking for a review on
                            your checkout page. The sole purpose of this page is to guide
                            your customer to complete their purchase, and this means that
                            the page should be as minimalist and pared-down possible. You
                            don’t want to have any unnecessary elements or Call To Actions.
                          </p> */}
                         {/*  <QueryClientProvider client={client}>
                            <Suspense fallback={<h4>Loading...</h4>}>
                              
                                <CurrencyPair/>  
                            </Suspense>
                          </QueryClientProvider> */}
                         {/*  <h3 className="ud-blog-details-subtitle">
                            What is it with your ideas?
                          </h3>
                          <p className="ud-blog-details-para">
                            At quo cetero fastidii. Usu ex ornatus corpora sententiae,
                            vocibus deleniti ut nec. Ut enim eripuit eligendi est, in
                            iracundia signiferumque quo. Sed virtute suavitate suscipiantur
                            ea, dolor this can eloquentiam ei pro. Suas adversarium
                            interpretaris eu sit, eum viris impedit ne. Erant appareat
                            corrumpit ei vel.
                          </p> */}
                           
                          
                        </div>
                      </div>
                    
                    </div>
                  </div>
                </section> 
                  
              </>      
        );
      }
    }
  
  
    export default  OPDashbord;