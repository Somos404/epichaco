import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import DataCard from './components/DataCard/DataCard';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <div className="wrapperContainer">
          <DataCard />
      </div>
      <Footer />
    </div>
  );
}

export default App;
