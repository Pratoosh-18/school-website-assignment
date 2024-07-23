import React, { createContext, useState } from 'react';

const AdmissionFormContext = createContext();

export const AdmissionFormProvider = ({ children }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    grade: '',
    documents: null,
  });

  const updateFormState = (key, value) => {
    setFormState(prevState => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <AdmissionFormContext.Provider value={{ formState, updateFormState }}>
      {children}
    </AdmissionFormContext.Provider>
  );
};

export default AdmissionFormContext;
