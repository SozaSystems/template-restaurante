import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import Menu from './pages/Menu/Menu';
import Delivery from './pages/Delivery/Delivery';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/delivery" element={<Delivery />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
