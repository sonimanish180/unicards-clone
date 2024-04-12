import React from 'react';
import LandingPage from './scripts/components/landingPage/LandingPage.jsx';
import { BrowserRouter } from 'react-router-dom';
import SecondScreen from './scripts/components/secondScreen/SecondScreen.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="main-content">
          <LandingPage />
          <SecondScreen />
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
