import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import Header from './components/Header';
import Footer from './components/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render (
  <div className='d-flex flex-column mb-3'>
    <Header className='p-2'/>
    <App className='p-5'/>
    <Footer className='p-2'/>
  </div>
);
