import React from 'react';
import Books from './components/Book/Books';
import Header from './components/Header/Header';
import './app.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Footer from './components/Footer/Footer';

function App() {

  return (
    <div className="App-container">
      <Header />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
