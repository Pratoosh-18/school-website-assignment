import React, { useContext, useState } from 'react';
import AdmissionFormContext from '../../context/AdmissionFormContext';

const AdmissionForm = () => {
  const { formState, updateFormState } = useContext(AdmissionFormContext);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    updateFormState(name, files ? files[0] : value);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formState.name) newErrors.name = 'Name is required';
    if (!formState.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formState.phone) {
      newErrors.phone = 'Phone is required';
    } else if (!/^\d{10}$/.test(formState.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    if (!formState.grade) newErrors.grade = 'Grade is required';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length === 0) {
      // No errors, proceed with form submission
      console.log(formState);
    } else {
      // Set validation errors
      setErrors(newErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md mb-10">
      <h3 className="text-3xl font-semibold mb-4 text-red-400">Admission Form</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Name</label>
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Grade</label>
          <input
            type="text"
            name="grade"
            value={formState.grade}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.grade ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.grade && <p className="text-red-500 text-sm">{errors.grade}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="block text-gray-700 font-semibold mb-2">Upload Documents</label>
          <input
            type="file"
            name="documents"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition duration-300"
      >
        Submit
      </button>
    </form>
  );
};

export default AdmissionForm;
