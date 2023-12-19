import React, { useState } from 'react';
import MobileNumberForm from './MobileNumberForm';
import PaymentForm from './PaymentForm';
import Illustration from './Illustration';
import './App.scss';

const App = () => {
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const handleMobileSubmit = () => {
    setShowPaymentForm(true);
  };

  return (
    <div className='App'>
      <Illustration />
      <div className='form-container'>
      {showPaymentForm ? (
        <PaymentForm onMobileSubmit={handleMobileSubmit}/>
      ) : (
        <MobileNumberForm onMobileSubmit={handleMobileSubmit} />
      )}
      </div>
    </div>
  );
};

export default App;
