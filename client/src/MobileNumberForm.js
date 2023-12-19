import React, { useState } from 'react';
import axios from 'axios';
import './MobileNumberForm.scss';

const MobileNumberForm = ({ onMobileSubmit }) => {
  const [mobile, setMobile] = useState('');
  const url = process.env.REACT_APP_BACKEND_URL;

  const handleMobileSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/user/checkPayment`, { mobile });
      const responseData = response.data;

      if (responseData.hasPaid) {
        // If the user has paid, you can display the payment date or relevant information
        alert(`You have already paid for the month. Payment Date: ${responseData.paymentDate}`);
      } else {
        // If the user has not paid, proceed to the payment form
        onMobileSubmit();
      }
    } catch (error) {
      console.error('Error checking payment:', error.message);
    }
  };

  return (
    // <div className="flex items-center justify-center h-screen bg-300 formbg signup">
    //   <div className="bg-gray-100 p-8 rounded-md shadow-lg">
    //     <h1 className="text-2xl font-bold mb-4">Enter Your Mobile Number</h1>
    //     <form onSubmit={handleMobileSubmit} className="max-w-md signup_fields">
    //       <label htmlFor="mobile" className="block text-sm font-medium text-gray-600">Mobile:</label>
    //       <input
    //         type="tel"
    //         id="mobile"
    //         name="mobile"
    //         value={mobile}
    //         onChange={(e) => setMobile(e.target.value)}
    //         required
    //         className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
    //       />

    //       <button
    //         type="submit"
    //         className="mt-4 bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
    //       >
    //         Submit
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div className="flex items-center justify-center h-screen bg-300 formbg">
  <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-96">
    <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">Get Started</h1>
    <form onSubmit={handleMobileSubmit} className="flex flex-col space-y-4">
      <label htmlFor="mobile" className="text-sm font-medium text-gray-600">
        Mobile Number:
      </label>
      <div className="relative">
        <input
          type="tel"
          id="mobile"
          name="mobile"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-gray-700"
          placeholder="Enter your mobile number"
        />
        <span className="absolute top-2 right-2 text-gray-500">📱</span>
      </div>

      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md py-2 px-4 hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300"
      >
        Let's Go!
      </button>
    </form>
  </div>
</div>

  );
};

export default MobileNumberForm;
