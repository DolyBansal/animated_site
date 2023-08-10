// import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Abour from './Abour';
import Contact from './Contact';
import Service from './Service';
import Home from './Home';
import Navbar from './Navbar';

import { Route,Routes } from 'react-router-dom';
import ErrorPage from './404page';
function App() {
  
  return(
    <>
    <Navbar/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/about" element={<Abour/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/Service" element={<Service/>}/>
        <Route path="*" element={<ErrorPage/>} />
        </Routes>
    
      
    </>
  );

}

export default App;
