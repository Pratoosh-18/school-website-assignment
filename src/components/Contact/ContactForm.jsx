import React, { useContext } from 'react';
import ContactFormContext from '../../context/ContactFormContext';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaRegPaperPlane } from 'react-icons/fa';

const ContactForm = () => {
  const { formState, updateFormState, handleSubmit, response } = useContext(ContactFormContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormState(name, value);
  };

  return (
    <div className="bg-white p-6 rounded-lg mb-10 border border-gray-200 hover:bg-gray-50 transition-colors">
      <h3 className="text-3xl font-semibold mb-4 flex items-center">
        <FaRegPaperPlane className="text-orange-600 mr-3" /> Contact Form
      </h3>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formState.message}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
            required
          ></textarea>
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
