import React from "react";

const Step2 = ({ formData, setFormData, handleNext, handleBack, errors }) => {
  const { address1, address2, city, state, zip } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 2: Address Information</h2>
      <input
        name="address1"
        value={address1}
        onChange={handleChange}
        placeholder="Address Line 1"
      />
      {errors.address1 && <span>{errors.address1}</span>}
      <input
        name="address2"
        value={address2}
        onChange={handleChange}
        placeholder="Address Line 2"
      />
      <input
        name="city"
        value={city}
        onChange={handleChange}
        placeholder="City"
      />
      {errors.city && <span>{errors.city}</span>}
      <input
        name="state"
        value={state}
        onChange={handleChange}
        placeholder="State"
      />
      {errors.state && <span>{errors.state}</span>}
      <input
        name="zip"
        value={zip}
        onChange={handleChange}
        placeholder="Zip Code"
      />
      {errors.zip && <span>{errors.zip}</span>}
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step2;
