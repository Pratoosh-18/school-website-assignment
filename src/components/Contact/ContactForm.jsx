import React, { useContext, useState } from 'react';
import ContactFormContext from '../../context/ContactFormContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const { formState, updateFormState, handleSubmit, response } = useContext(ContactFormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormState(name, value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formState.message) newErrors.message = 'Message is required';

    return newErrors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission
      handleSubmit();
    } else {
      // Set validation errors
      setErrors(newErrors);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg mb-10 border border-gray-200 hover:bg-gray-50 transition-colors">
      <h3 className="text-3xl font-semibold mb-4 flex items-center">
        <FaRegPaperPlane className="text-orange-600 mr-3" /> Contact Form
      </h3>
      <form className="space-y-4" onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formState.message}
            onChange={handleChange}
            className={`mt-1 block w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors`}
            required
          ></textarea>
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
        >
          Send Message
        </button>
      </form>
      {response && <p className="mt-4 text-lg text-gray-700">{response}</p>}
    </div>
  );
};

export default ContactForm;
