// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Lightings from './pages/Lightings/Lightings';
import HomePage from './pages/HomePage';
import Layout from './components/Layout';
import Accessories from './pages/Accessories/Accessories';
import Chowki from './pages/Chowki/Chowki';
import BulkOrderForm from './pages/BulkOrderForm';
import Tableware from './pages/Tableware/Tableware';
import Furniture from './pages/Furniture/Furniture';
import Walldecor from './pages/Wall Decor/WallDecor';
import DesigneryCloth from './pages/Designery Cloth/DesigneryCloth';
import PaymentPage from './pages/Payment/PaymentPage';
import ProductDetail from './pages/ProductDetail';



const App = () => {
  return (
    
      <Router>
        <Layout>
          <Routes>
         
            <Route path="/" element={<HomePage />} />
            <Route path="/lightings" element={<Lightings />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/chowki" element={<Chowki/>} />
            <Route path="/tableware" element={<Tableware />} />
            <Route path="/furniture" element={<Furniture/>} />
            <Route path="/wall-decor" element={<Walldecor />} />
            <Route path="/designery-cloth" element={<DesigneryCloth/>} />
            <Route path="/bulkorder-form" element={<BulkOrderForm/>} />
            <Route path="/checkout" element={<PaymentPage />} />
            <Route path="/product/:category/:id" component={<ProductDetail/>} />


            

           
       
          </Routes>
        </Layout>
      </Router>
    
    
  );
}

export default App;