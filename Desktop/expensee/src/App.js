import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { GlobalProvider } from './Context/GlobalState';
import Landing from './Components/Loginpage'
import Home from './Components/Home';
import Transactions from './Components/TransactionList'
function App() {
  return (
    <GlobalProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/transactions" element={<Transactions />} />
      </Routes>
    </Router>
    </GlobalProvider>
  );
}

export default App;
