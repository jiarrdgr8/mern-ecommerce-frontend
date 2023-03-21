import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import {Login} from './Routes.js';
import LoginPage from './pages/LoginPage'


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Routes>
          <Route path='/login' element={<LoginPage />}/>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
