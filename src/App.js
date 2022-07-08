import React from 'react';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import NavigationBar from "./pages/layout/NavigationBar";
import LoginBar from "./pages/layout/LoginBar";

import Login from "./pages/Login";
import Home from "./pages/Home";

import ProductList from "./pages/Product/ProductList";
import ProductAdd from "./pages/Product/ProductAdd";
import ProductEdit from "./pages/Product/ProductEdit";

import CustomerList from "./pages/Customer/CustomerList";
import CustomerAdd from "./pages/Customer/CustomerAdd";
import CustomerEdit from "./pages/Customer/CustomerEdit";

import SubscribeList from "./pages/Subscribe/SubscribeList";
import SubscribeAdd from "./pages/Subscribe/SubscribeAdd";
import SubscribeEdit from "./pages/Subscribe/SubscribeEdit";

function App() {

  const hasJwt = () => {
    let flag = false;
    localStorage.getItem("token") ? flag=true : flag=false
    return flag
  };

  const ProtectedRoute = ({ children }) => {
    if (!hasJwt()) {
      return <Navigate to="/login" replace />;
    }
    return children;
  };

  return (
    <Router>
      {!hasJwt() ? 
        <LoginBar /> : 
        <NavigationBar />
      }
      <br></br>
      <div className="container">
        <Routes>
          <Route exact path='/login' element={< Login />} />
          <Route exact path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route exact path='/product' element={<ProtectedRoute><ProductList /></ProtectedRoute>} />
          <Route exact path='/product/add' element={<ProtectedRoute><ProductAdd /></ProtectedRoute>} />
          <Route exact path='/product/edit/:id' element={<ProtectedRoute><ProductEdit /></ProtectedRoute>} />
          <Route exact path='/customer' element={<ProtectedRoute><CustomerList /></ProtectedRoute>} />
          <Route exact path='/customer/add' element={<ProtectedRoute><CustomerAdd /></ProtectedRoute>} />
          <Route exact path='/customer/edit/:id' element={<ProtectedRoute><CustomerEdit /></ProtectedRoute>} />
          <Route exact path='/subscribe' element={<ProtectedRoute><SubscribeList /></ProtectedRoute>} />
          <Route exact path='/subscribe/add' element={<ProtectedRoute><SubscribeAdd /></ProtectedRoute>} />
          <Route exact path='/subscribe/edit/:id' element={<ProtectedRoute><SubscribeEdit /></ProtectedRoute>} />
        </Routes>
    </div>
    </Router>
  );
}
 
export default App;