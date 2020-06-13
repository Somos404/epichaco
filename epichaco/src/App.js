import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DataCard from './components/DataCard/DataCard';
import Navbar from './components/Navbar/Navbar';
import CardContainer from './components/CardContainer/CardContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
