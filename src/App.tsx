import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/initiate'></Route>
          <Route path='/list-balance-sheet'></Route>
          <Route path='/submit'></Route>
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
