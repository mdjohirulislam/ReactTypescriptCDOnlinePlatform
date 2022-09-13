import axios from 'axios'; 
import useSWR from 'swr';
const accessToken = sessionStorage.getItem("access_token") as string;

function handleLogout(e:any) {
  e.preventDefault();
  sessionStorage.clear();
  window.location.href = '/';
}
export const apicall = async () => { 
    console.log(" apicall ================================ 1");
    const res = await axios.get("/api");
    console.log(" apicall ================================ 2");
    const data = await res.data; 
    console.log(" apicall ================================ 3");
    sessionStorage.setItem("data",   JSON.stringify(data));  
    console.log(" apicall ================================ 4");
};

export const getToken = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        /* body: JSON.stringify({ title: 'React Hooks POST Request Example' }) */
    };
    const res = await fetch("/api/auth",requestOptions);
        const data = await res.json(); 
        sessionStorage.setItem('access_token',data.response.access_token);
        sessionStorage.setItem('token_type',data.response.token_type);
        sessionStorage.setItem('scope',data.response.scope);
        const currentDT = new Date();
        const expires_in = new Date(currentDT.getTime() + 9 * 60000).toLocaleTimeString();
        sessionStorage.setItem('expires_in', expires_in); 
};

export function  GetAccessToken():any{     

    if(sessionStorage.getItem("access_token")===null)
    {
        getToken();
    }
    
  };

  export const getRatesAPI = async () => {  
    const res = await axios.get("/api/v1/rates/?token="+accessToken+"&pair=GBPUSD"); 
    const data = await res.data;  
    sessionStorage.setItem("userData",JSON.stringify(data)); 
   // return data;
 
};

 /** Update  user information to database by REST API  call */
export const putUserInfoByAPI = async () => {  
  const res = await axios.get("/api/customers-details/?token="+accessToken); 
  const data = await res.data;  
  sessionStorage.setItem("userData",JSON.stringify(data)); 
 // return data;

};


  /** Retrive user information from database by REST API  call */

  export const getUserInfoByAPI = async () => {  
        const res = await axios.get("/api/customers-details/?token="+accessToken); 
        const data = await res.data;  
        sessionStorage.setItem("userData",JSON.stringify(data)); 
       // return data;
     
};

export function GetUserData() {
    if(sessionStorage.getItem("userData")===null)
    {
        console.log("getUserInfoByAPI");
        getUserInfoByAPI();
    }
    const data = sessionStorage.getItem("userData") as string;
    let person = JSON.parse(data);
    return (  
        
       <ul id="nav" className="navbar-nav mx-auto">
                     <li className="nav-item">
                       <a className="ud-menu-scroll" href="#home">Transfer</a>
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
                 <a href="#"> {person?.['contacts'][0]['first_name']} {person?.['contacts'][0]['last_name']} </a>
                        
            <ul className="ud-submenu"> 
                <li className="ud-submenu-item">
                
                <a href="#" className="ud-submenu-link">
                ID : {person?.['customer_id']}  
                </a>
                </li> 
                <li className="ud-submenu-item">
                <a href="#" className="ud-submenu-link">
                    
                </a>
                </li>
                <li className="ud-submenu-item">
                <a href="personal-details.html" className="ud-submenu-link">
                    Profile management
                </a>
                </li>
                <li className="ud-submenu-item">
                <a href="#" className="ud-submenu-link">
                    
                </a>
                </li>
                <li className="ud-submenu-item">
                <a href="#" className="ud-submenu-link">Log out</a>
                </li>
            </ul>
            </li>
        </ul>
        
    );
}

export function LogInUserMenu() { 
  const { data, error } = useSWR("/api/customers-details/?token="+accessToken, axios,{suspense: true,});
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div> 
  sessionStorage.setItem("userData",JSON.stringify(data.data));
  return (
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
        <a href="#"> {data.data?.['contacts'][0]['first_name']} {data.data?.['contacts'][0]['last_name']} </a>
            <ul className="ud-submenu"> 
                <li className="ud-submenu-item">
                
                  <a href="#" className="ud-submenu-link">
                  ID : {data.data?.['customer_id']}  
                  </a>
                </li> 
                <li className="ud-submenu-item">
                  <a href="#" className="ud-submenu-link">
                      
                  </a>
                </li>
                <li className="ud-submenu-item">
                  <a href="personal-details" className="ud-submenu-link">
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
  );
}

export function LogInUserMenuWithout() { 
  const data = sessionStorage.getItem("userData") as string;
  let person = JSON.parse(data); 
  return (
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
        <a href="#"> {person?.['contacts'][0]['first_name']} {person?.['contacts'][0]['last_name']} </a> 
        <ul className="ud-submenu"> 
                            <li className="ud-submenu-item">
                           
                              <a href="#" className="ud-submenu-link">
                              ID : {person?.['customer_id']}  
                              </a>
                            </li> 
                            <li className="ud-submenu-item">
                              <a href="#" className="ud-submenu-link">
                                 
                              </a>
                            </li>
                            <li className="ud-submenu-item">
                              <a href="personal-details" className="ud-submenu-link">
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
  );
}

export function QuoteUserData() { 
  
    const { data, error } = useSWR("/api/customers-details/?token="+accessToken, axios,{suspense: true,});
    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div> 
    sessionStorage.setItem("userData",JSON.stringify(data.data));
    return (
      <>
      <a href="#"> {data.data?.['contacts'][0]['first_name']} {data.data?.['contacts'][0]['last_name']} </a>
      </>
    );
}

export function QuoteUserDataWithout() { 
  const data = sessionStorage.getItem("userData") as string;
  let person = JSON.parse(data);
  return (
    <>
      <a href="#"> {person?.['contacts'][0]['first_name']} {person?.['contacts'][0]['last_name']} </a>
    </>
  );
}

