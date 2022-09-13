const axios = require("axios");
const express = require("express");
const cors = require('cors');
const pino = require("express-pino-logger")();
const PORT = process.env.PORT || 8080;
const API_TOKEN = process.env.REACT_APP_API_KEY;
const app = express();
const environment = "devDependencies";

app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(cors());
app.use(pino);

app.use((req, res, next) => {
  let allowedOrigins = "http://localhost";
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  //res.setHeader("Access-Control-Allow-Credentials", true);
  //res.setHeader("Content-Type", "application/x-www-form-urlencoded");
  //res.setHeader("Content-Length",54138);
  res.setHeader("Host","*/*");
  next();
});


//const customer_Id = "0201001006784487"; // OP UAT account

const customer_Id = "0201001006777978"; // OP Johir own DEV account
const contact_id = "825164";

app.get("/api", async(req, res) => { 
  console.log("api call ==============================================================");
  res.json({ message: "Hello from server!"});
});

  
/// New api call function 

//Update profile of the main user


app.put("/api/update-contact/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization); 
  //req.url 
  console.log("req.query  recipient   ********************************************** *************************: calling : " + req.query.id); 
  console.log("Create recipient   ********************************************** *************************: calling" + token); 
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   
    let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/contacts/'+contact_id; 
   console.log("get-all-recipients  ********************************************** *************************: calling" + apiUrl); 
   const body = req.body;// JSON.stringify(req.body);
   const data = JSON.stringify(req.body);// req.body;// JSON.stringify(req.body);
   console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   console.log("Posted data  ********************************************** *************************: calling" + JSON.stringify(req.data));
   await axios({ 
     method:"put", url:apiUrl,data:req.body, headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
/*   
console.log("api call ==============================================================");
res.json({ message: "Hello from server!"}); */
});







// Delete the recipient data 
app.delete("/api/delete-recipients-data/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization); 
  //req.url 
  console.log("req.query  recipient   ********************************************** *************************: calling : " + req.query.id); 
  console.log("Create recipient   ********************************************** *************************: calling" + token); 
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   
    let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/recipients/'+req.query.id; 
   console.log("get-all-recipients  ********************************************** *************************: calling" + apiUrl); 
   //const body = req.body;// JSON.stringify(req.body);
   //const data = JSON.stringify(req.body);// req.body;// JSON.stringify(req.body);
   console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   console.log("Posted data  ********************************************** *************************: calling" + JSON.stringify(req.data));
   await axios({ 
     method:"delete", url:apiUrl , headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
/*   
console.log("api call ==============================================================");
res.json({ message: "Hello from server!"}); */
});


//Update the existing recipients 

app.put("/api/recipients-information-update/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization); 
  //req.url 
  console.log("req.query  recipient   ********************************************** *************************: calling : " + req.query.id); 
  console.log("Create recipient   ********************************************** *************************: calling" + token); 
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   
    let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/recipients/'+req.query.id; 
   console.log("get-all-recipients  ********************************************** *************************: calling" + apiUrl); 
   const body = req.body;// JSON.stringify(req.body);
   const data = JSON.stringify(req.body);// req.body;// JSON.stringify(req.body);
   console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   console.log("Posted data  ********************************************** *************************: calling" + JSON.stringify(req.data));
   await axios({ 
     method:"put", url:apiUrl,data:req.body, headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
/*   
console.log("api call ==============================================================");
res.json({ message: "Hello from server!"}); */
});


// Create new recipient  api call

app.post("/api/create-new-recipients/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization);  
  console.log("Create recipient   ********************************************** *************************: calling" + token); 
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
   let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/recipients'; 
   console.log("get-all-recipients  ********************************************** *************************: calling" + apiUrl); 
   const body = req.body;// JSON.stringify(req.body);
   const data = JSON.stringify(req.body);// req.body;// JSON.stringify(req.body);
   console.log("Body data  ********************************************** *************************: calling" + JSON.stringify(req.body));
   console.log("Posted data  ********************************************** *************************: calling" + JSON.stringify(req.data));
   await axios({ 
     method:"post", url:apiUrl,data:req.body, headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});

/* console.log("api call ==============================================================");
res.json({ message: "Hello from server!"}); */
});




// Get all the recipent from the customet 

app.get("/api/get-all-recipients/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization);  
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
   let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/recipients?page=1&limit=5'; 
   console.log("get-all-recipients  ********************************************** *************************: calling" + apiUrl); 
   await axios({ 
     method:"get", url:apiUrl,headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
});


app.get("/api/customers-details-information/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization);  
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
   let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/details';
   console.log("customers-details-information  ********************************************** *************************: calling" + apiUrl); 
   await axios({ 
     method:"get", url:apiUrl,headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("response.data ********************************************** *************************: " + respond); 
    res.json(response.data);  
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
});


// Get main customer details 

app.get("/api/get-customers-details/", async(req, res) => { 
  
  const  token = JSON.stringify(req.headers.authorization);  
    const headers = { 
        Authorization: token.slice(1,-1),
        Accept: 'application/json', 
    };  
    
   let apiUrl = 'https://sandbox.currenciesdirect.com/v1/customers/'+customer_Id+'/details'; 
   console.log("get-customers-details  ********************************************** *************************: calling" + apiUrl); 
   await axios({ 
     method:"get", url:apiUrl,headers : headers  
   }).then((response) => {
    let respond = JSON.stringify({data: response.data});
    console.log("get-customers-details response.data ********************************************** *************************: " +  JSON.stringify(response.data)); 
    res.json({data: response.data});   
    
  }) .catch(error => {
    res.status(404).json({ 
        status: 404, 
        message: "Error", 
    });

    console.error(error);
});
});

















// old api call function 

// API authentication for access token.
app.post("/api/auth", (req, res) => {
    
 
  let apiUrl = `https://sandbox.currenciesdirect.com/auth/oauth/v2/token?grant_type=client_credentials&scope=internal&client_id=l7f88a88f56b3d44ae8b86de2f0c747af7&client_secret=87b58a6b7b99485082202736cc751920`;

  axios.post(apiUrl)
      .then(response => {

          const { data } = response;
         // console.log("response.data : "+ data);

          res.status(200).json({ 
              //status: 200, 
              //message: "API", 
              response:data
              
          });
          
      })
      .catch(error => {
          res.status(404).json({ 
              status: 404, 
              message: "Error", 
          });

          console.error(error);
      });

});


// Get customer details 
app.get("/api/customers-details/", (req, res) => {
  
  let parem = req.url.split('='); 
  let token = parem[1];    
  let config = {
      headers: {
          
           "Authorization": `Bearer `+token 
      },
 };    

 console.log("parem "+ parem +" ## token : "+ token);
  let apiUrl = `https://sandbox.currenciesdirect.com/v1/customers/0201001006777978/details`;
  //axios.get(apiUrl,config)
  axios.get(apiUrl,config)
  .then((response) => {
      let respond = JSON.stringify({data: response.data});
      console.log("response.data ********************************************** *************************: " + respond);
      
      res.json(response.data);  
    }) .catch(error => {
      res.status(404).json({ 
          status: 404, 
          message: "Error", 
      });

      console.error(error);
  });
});

  
// Get exchange rates by currency pair
app.get("/api/rates/", (req, res) => {
  let parem = req.url.split('='); 
  let token = parem[1].split('&'); 
  //console.log("token ********************************************** *************************: " + token[0]);
  let currencypair = parem[2];  
  //console.log("token ********************************************** *************************: " + parem[2]);
  let config = {
      headers: {
          
           "Authorization": `Bearer `+token[0],
      },
      data :{
        "pair" :"USDGBP"
      },
     // data:{'pair': 'USDGBP'},
 }; 
  console.log("parem "+ parem +" ## currencypair : "+ currencypair);   
  let apiUrl = `https://sandbox.currenciesdirect.com/v1/rates?pair=`+parem[2];
  axios.get(apiUrl,config)
  .then((response) => {
      let respond = JSON.stringify({data: response.data});
      //console.log("response.data **#####################******************************************** *************************: " + (respond)); 
      res.json(response.data);  
    }) .catch(error => {
      res.status(404).json({ 
          status: 404, 
          message: "Error", 
      });

      console.error(error);
  });
});



///////////////////////////////////////////////////////////////
//  CurrenciesDirect API to get all the currencies data in one call

app.get("/api/v1/rates/", (req, res) => {
  let parem = req.url.split('='); 
  let token = parem[1].split('&'); 
  //console.log("token ********************************************** *************************: " + token[0]);
  let currencypair = parem[2];  
  //console.log("token ********************************************** *************************: " + parem[2]);
  let config = {
      headers: { 
           "Authorization": `Bearer `+token[0],
      }, data :{"pair" :"GBPEUR" }, 
 }; 
 const currencyName = ['GBP', 'EUR', 'USD','CAD','AED','AUD','CHF','DKK','EGP','HKD','ILS','JPY','NOK','NZD','SEK','SGD','THB','TRY','ZAR']; 
 const currencyReq = 'pair='+currencypair+currencyName[0]+'&pair='+currencypair+currencyName[1]+'&pair='+currencypair+currencyName[2]+'&pair='+currencypair+currencyName[3]+'&pair='+currencypair+currencyName[4]+'&pair='+currencypair+currencyName[5]+'&pair='+currencypair+currencyName[6]+'&pair='+currencypair+currencyName[7]+'&pair='+currencypair+currencyName[8]+'&pair='+currencypair+currencyName[9]+'&pair='+currencypair+currencyName[10]+'&pair='+currencypair+currencyName[11]+'&pair='+currencypair+currencyName[12]+'&pair='+currencypair+currencyName[13]+'&pair='+currencypair+currencyName[14]+'&pair='+currencypair+currencyName[15]+'&pair='+currencypair+currencyName[16]+'&pair='+currencypair+currencyName[17]+'&pair='+currencypair+currencyName[18];  
  
  let apiUrl = `https://sandbox.currenciesdirect.com/v1/rates?`+currencyReq;
  axios.get(apiUrl,config)
  .then((response) => {
      let respond = JSON.stringify({data: response.data});
      var keeperFields = ["Quote", "Name"];
      var newJSON = {conversion_rates: [] };
      var oneobj = {};

       // put the list of records into a convenience var. 
      response.data.forEach(function(obj) { 
        for (var i = 0; i < keeperFields.length; i++) { 
          if (obj.hasOwnProperty(keeperFields[i])) { 
            if(keeperFields[i]=="Quote")
            {
              var tsp = obj[keeperFields[i+1]];
              var ttp = tsp.slice(-3);  
              if(currencypair!=ttp)
              {
                oneobj[ttp]=  obj[keeperFields[i]]; 
              }
              else
              {
                oneobj[ttp]=  1;
              } 
            } 
          }
        }
      });
      //Send the data int front end
    res.json(oneobj); 
    }) .catch(error => {
      res.status(404).json({ 
          status: 404, 
          message: "Error", 
      }); 
      console.error(error);
  });
});
 
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});




















/*const express = require("express");
const cors = require('cors');
const pino = require("express-pino-logger")();
const axios = require('axios');

const PORT = process.env.PORT || 8080;

const app = express();
app.set("port", PORT);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.disable("x-powered-by");
app.use(cors());
app.use(pino);


app.use((req, res, next) => {
  let allowedOrigins = "http://localhost";
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
      res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  //res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type, Authorization");
  //res.setHeader("Access-Control-Allow-Credentials", true);
  //res.setHeader("Content-Type", "application/x-www-form-urlencoded");
  //res.setHeader("Content-Length",54138);
  res.setHeader("Host","*");
  next();
});

app.get("/api",(req, res) => {
  res.json({ message: "Hello from server!" });
});
 
 

// API authentication for access token.
app.post("/api/auth", async(req, res) => { 
  console.log("----------------------- /api/auth is called ");
  let apiUrl = `https://sandbox.currenciesdirect.com/auth/oauth/v2/token?grant_type=client_credentials&scope=internal&client_id=l7f88a88f56b3d44ae8b86de2f0c747af7&client_secret=87b58a6b7b99485082202736cc751920`;
   
  await axios.post(apiUrl)
      .then(response => { res.status(200).json(response.data); })
      .catch(error => {
          res.status(404).json({ status: 404, message: "Error",});
          console.error(error);
      });

});

/// Get customer details 
app.get("/api/customers-details/", async(req, res) => {
  
  let parem = req.url.split('='); 
  let token = parem[1];    
  let config = { headers: {"Authorization": `Bearer `+token }};    
  let apiUrl = `https://sandbox.currenciesdirect.com/v1/customers/0201001006777978/details`;
  
  await axios.get(apiUrl,config)
  .then((response) => { res.status(200).json(response.data);})
  .catch(error => {
      res.status(404).json({ status: 404, message: "Error", });
      console.error(error);
  });
});

// Get exchange rates by currency pair
app.get("/api/rates/", async(req, res) => {
  let parem = req.url.split('='); 
  let token = parem[1].split('&'); 
  let config = {headers: {"Authorization": `Bearer `+token[0]}}; 
  
  let apiUrl = `https://sandbox.currenciesdirect.com/v1/rates?pair=`+parem[2];
  await axios.get(apiUrl,config)
  .then((response) => { res.status(200).json(response.data);})
  .catch(error => {res.status(404).json({  status: 404, message: "Error",  });
      console.error(error);
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
*/