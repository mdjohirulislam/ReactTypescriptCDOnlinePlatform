import {useEffect } from 'react';
import {getToken} from './apiFunctionCall';
 
function Recursive(){ 
  useEffect(() => {
    const interval = setInterval(() => { 
      console.log("Renew token calling now =========================================");
        getToken(); 
      console.log("Renew token just called ========================================="+ Date.now);
    }, 300000);
// 540000 mili second = 9 minutes. 300000 = 5 minutes; 60000 = 1 minutes & 1000 = 1 second. 
    return () => clearInterval(interval);
  }, []);
 
  return (
    <></> 
  );
}
export {Recursive};