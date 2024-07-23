import React, { createContext, useState } from 'react';

const ContactFormContext = createContext();

export const ContactFormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [response, setResponse] = useState(null);

  const updateFormState = (key, value) => {
    setFormState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint to send the form data
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await res.json();
      setResponse(data.message);
      // Reset form state
      setFormState({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error:', error);
      setResponse('There was an error submitting your message. Please try again later.');
    }
  };

  return (
    <ContactFormContext.Provider value={{ formState, updateFormState, handleSubmit, response }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export default ContactFormContext;
