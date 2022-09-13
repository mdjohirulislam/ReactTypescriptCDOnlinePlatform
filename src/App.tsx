import React ,{Component}from 'react';
//import logo from './logo.svg';
import './App.css'; 
import Header from './components/OPHeader/OPHeader';
import Footer from './components/OPFooter/OPFooter';
import {Helmet} from "react-helmet"; 
import {GetAccessToken} from './core/api/apiFunctionCall';
import {Recursive} from './core/api/Recursive';
//function App() {
  class App extends Component {
    constructor(props:any) {
      super(props);
      GetAccessToken();  
    }
    
    render() {  
      return (
        <>
          <Header />
          <Footer/> 
          <Helmet>
            <script src="./assets/js/bootstrap.bundle.min.js"></script>
            <script src="./assets/js/wow.min.js"></script>
            <script src="./assets/js/main.js"></script>
          </Helmet> 
          <Recursive/>
        </>
        );
      }
  }

export default App;
