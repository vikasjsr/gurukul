import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import About from './components/About/About';
import ForgotPass from './components/auth/ForgotPass';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Request from './components/auth/Request/Request';
import ResetPass from './components/auth/ResetPass';
import Contact from './components/Contacts/Contact';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header';
import NotFound from './components/Layout/NotFound/NotFound';
import PaymentFail from './components/Payments/PaymentFail';
import PaymentSuccess from './components/Payments/PaymentSuccess';
import Subscribe from './components/Payments/Subscribe';


function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/courses" element = {<Courses />} />
        <Route path="/contactUs" element = {<Contact />} />
        <Route path="/contactUs" element = {<Contact />} />
        <Route path="/about" element = {<About />} />
        <Route path="/requestACourse" element = {<Request />} />
        <Route path="/login" element = {<Login />} />
        <Route path="/register" element = {<Register />} />
        <Route path="/forgetpassword" element = {<ForgotPass />} />
        <Route path="/resetpassword/:token" element = {<ResetPass />} />
        <Route path="/paymentsuccess" element = {<PaymentSuccess />} />
        <Route path="/paymentfail" element = {<PaymentFail />} />
        <Route path="/subscribe" element = {<Subscribe />} />
        <Route path="/*" element = {<NotFound />} />    
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
