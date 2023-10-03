import React from 'react';
import './App.css';
import './home';
import Hometicket from './home';
import termsCondition from './components/termsCondition';
import privacyPolicy from './components/privacyPolicy';
import contactUs from './components/contactUs';
function App() {
  return (
    <div className="App">
     <Hometicket/>
     <termsCondition/>
     <privacyPolicy/>
     <contactUs/>
     {/* <Footer/> */}
    </div>
  );
}

export default App;