import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './routes/Home';
import Top from './routes/Top';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top" element={<Top />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
