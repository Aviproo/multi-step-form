// Step2.js
import React from 'react';

const Step2 = ({ formData, setFormData, handleNext, handleBack }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input name="address1" value={address1} onChange={handleChange} placeholder="Address Line 1" />
      <input name="address2" value={address2} onChange={handleChange} placeholder="Address Line 2" />
      <input name="city" value={city} onChange={handleChange} placeholder="City" />
      <input name="state" value={state} onChange={handleChange} placeholder="State" />
      <input name="zip" value={zip} onChange={handleChange} placeholder="Zip Code" />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;