import React, { useContext } from 'react';
import AdmissionFormContext from '../../context/AdmissionFormContext';


const AdmissionForm = () => {
  const { formState, updateFormState } = useContext(AdmissionFormContext);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    updateFormState(name, files ? files[0] : value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formState);
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
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Phone</label>
          <input
            type="text"
            name="phone"
            value={formState.phone}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Grade</label>
          <input
            type="text"
            name="grade"
            value={formState.grade}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
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
