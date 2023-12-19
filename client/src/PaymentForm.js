import React, { useState } from 'react';
import axios from 'axios';
import TextInput from './TextInput';
import MobileNumberForm from './MobileNumberForm';
import './PaymentForm.css'

const PaymentForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        mobile: '',
        email: '',
        month: '',
        shift: '',
    });
    const url = process.env.REACT_APP_BACKEND_URL;
    const [paymentStatus, setPaymentStatus] = useState(false);
const CustomDropdown = ({ id, name, value, options, onChange, required }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div
        className="relative z-10 p-2 border rounded-md shadow-sm cursor-pointer flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-gray-800">{value || 'select'}</span>
        <svg
          className={`w-4 h-4 ml-2 transform ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white border rounded-md shadow-lg overflow-auto max-h-40 z-20">
          {options.map((option) => (
            <div
              key={option.value}
              className="p-2 cursor-pointer hover:bg-gray-100"
              onClick={() => {
                onChange({ target: { name, value: option.value } });
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic client-side validation
        if (formData.age < 18 || formData.age > 65) {
            alert('Age must be between 18 and 65.');
            return;
        }

        // Assuming there is a monthly fee of 500 INR
        const monthlyFee = 500;

        try {
            // Assuming your backend endpoint is 'http://localhost:yourPortNumber/user'
            const response = await axios.post(`${url}/user`, formData);
            const responseData = response.data;

            // Mock payment function
            const paymentResponse = completePayment(responseData, monthlyFee);

            // Display a message to the user based on the payment response
            alert(paymentResponse.message);
            setPaymentStatus(true);
        } catch (error) {
            console.error('Error submitting form:', error.message);
        }
    };

    const completePayment = (userData, monthlyFee) => {
        // Mock function for payment
        // In a real scenario, you would interact with a payment gateway
        // This is just a placeholder/mock function
        const totalPayment = calculateTotalPayment(monthlyFee);

        // You can add more logic here to interact with a payment gateway

        return { message: `Payment successful! Total Amount: ${totalPayment} INR` };
    };

    const calculateTotalPayment = (monthlyFee) => {
        // Assuming the user is paying for the entire month
        return monthlyFee;
    };

    return (
        <>
            {paymentStatus ? <MobileNumberForm /> : (<div className="flex items-center justify-center h-screen formbg">
  <div className="bg-white p-8 rounded-md shadow-lg w-full sm:w-96">
    <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 formText">
      Welcome to Yoga Class
      <br></br>
      <p className='informText'>
      It seems your mobile number is not registered. Please register below.
    </p>
    </h1>
    

    <form onSubmit={handleSubmit} className="max-w-md">
      <div className="grid grid-cols-1 gap-4">
        <TextInput
          id="name"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <TextInput
          id="age"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          required
        />

        <TextInput
          id="mobile"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />

        <TextInput
          id="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
        />

<CustomDropdown
  id="month"
  name="month"
  value={formData.month}
  onChange={handleChange}
  options={[
    { value: '', label: 'Select a Month' },
    { value: 'January', label: 'January' },
    { value: 'February', label: 'February' },
    { value: 'March', label: 'March' },
    { value: 'April', label: 'April' },
    { value: 'May', label: 'May' },
    { value: 'June', label: 'June' },
    { value: 'July', label: 'July' },
    { value: 'August', label: 'August' },
    { value: 'September', label: 'September' },
    { value: 'October', label: 'October' },
    { value: 'November', label: 'November' },
    { value: 'December', label: 'December' },
  ]}
  required
/>

<CustomDropdown
  id="shift"
  name="shift"
  value={formData.shift}
  onChange={handleChange}
  options={[
    { value: '', label: 'Select a Batch' },
    { value: '6-7AM', label: '6-7AM' },
    { value: '7-8AM', label: '7-8AM' },
    { value: '8-9AM', label: '8-9AM' },
    { value: '5-6PM', label: '5-6PM' },
  ]}
  required
/>
      </div>

      <button
        type="submit"
        className="mt-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md py-2 px-4 hover:opacity-90 focus:outline-none focus:ring focus:border-blue-300 submitbtn" 
      >
        Make a payment of 500 rupees
      </button>
    </form>
  </div>
</div>


)} </>
    );
};

export default PaymentForm;
