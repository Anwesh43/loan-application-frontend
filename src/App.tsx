import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FetchBalanceSheet from './components/FetchBalanceSheet';
import InitiateComponent from './components/InitiateComponent';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/initiate' element = {<InitiateComponent/>}></Route>
          <Route path='/list-balance-sheet' element = {<FetchBalanceSheet/>}></Route>
          <Route path='/submit'></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
