import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Header from './components/Layout/Header/Header';
import Courses from './components/Courses/Courses';
import Footer from './components/Layout/Footer/Footer';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ForgetPassword from './components/Auth/ForgetPassword';
import ResetPassword from './components/Auth/ResetPassword';
import ContactUs from './components/ContactUs/ContactUs';
import RequestCourse from './components/RequestCourse';
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/courses" element={<Courses />}></Route>
        <Route path="/contactus" element={<ContactUs />}></Route>
        <Route path="/requestcourse" element={<RequestCourse />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword/:token" element={<ResetPassword />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
