import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import React, { createContext, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Header from './Components/Home/Header/Header';
import NotFound from './Components/NotFound/NotFound';
import AboutUs from './Components/AboutUs/AboutUs';
import Footer from './Components/Footer/Footer';
import ContactUs from './Components/ContactUs/ContactUs';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import OurServices from './Components/OurServices/OurServices';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute'

export const UserContext=createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [cart, setCart] = useState({});

  return (
    <UserContext.Provider value={{loggedInUser, setLoggedInUser, cart, setCart}}>

<div className="App">
      <AuthProvider>
      <BrowserRouter>
      <Header></Header>
        <Switch>
        <Route exact path="/">
            <Home></Home>
         </Route>
         <Route path="/home">
           <Home></Home>
         </Route>
         <Route path="/services">
          <OurServices></OurServices>
         </Route>
         <Route path="/about">
           <AboutUs></AboutUs>
         </Route>
          <PrivateRoute path="/booking/:id">
            <Booking></Booking>
          </PrivateRoute>
          

         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/register">
           <Register></Register>
         </Route>
         <Route path="/contact">
           <ContactUs></ContactUs>
         </Route>
         <Route path="*">
                <NotFound></NotFound>
              </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
      </AuthProvider>
    </div>
    </UserContext.Provider>
    
  );
}

export default App;
