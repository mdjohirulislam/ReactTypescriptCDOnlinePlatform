import TranaferYourMoney from './images/TranaferYourMoneyLogo.png';
 
function handleSubmit(e:any) {
    e.preventDefault();
    window.location.href = '/add-payee';
  }

   
function OPMakeTransfer () { 
      

      return (

        <>
          <section className="ud-page-banner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ud-banner-content">
                  <h1>Make A Transfer</h1>
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
                
                <h3>Who would you like to send money to? </h3>
                <p> 	&nbsp; </p> 
                <img src={TranaferYourMoney} alt="logo" className="rounded mx-auto d-block"/> 
                <p> 	&nbsp; </p>
                  <div className="ud-404-content">  
                  <div className="ud-form-group">
                    <button type="submit" className="ud-main-btn w-100" onClick={handleSubmit}>Add recipient</button>
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
  
   
  export default  OPMakeTransfer;
