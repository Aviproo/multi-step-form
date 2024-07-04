// Step1.js
import React from "react";

const Step1 = ({ formData, setFormData, handleNext, errors }) => {
  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <h2>Step 1: Personal Information</h2>
      <input
        name="name"
        value={name}
        onChange={handleChange}
        placeholder="Name"
      />
      {errors.name && <span>{errors.name}</span>}
      <input
        name="email"
        value={email}
        onChange={handleChange}
        placeholder="Email"
      />
      {errors.email && <span>{errors.email}</span>}
      <input
        name="phone"
        value={phone}
        onChange={handleChange}
        placeholder="Phone"
      />
      {errors.phone && <span>{errors.phone}</span>}
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Step1;
