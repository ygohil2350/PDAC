import './App.css';
import React from 'react';
import {Card} from "../src/Data/Carddata"
import Header from "../src/Component/Header"
import Carosal from './Component/Carosal';

function App() {
  
  return (
  <div className='App'>
    {/* <h1>This is Card</h1>
    <Cards cards1={Card}/> */}
    <Header/>
    <Carosal/>
  </div>
  );
}

export default App;
