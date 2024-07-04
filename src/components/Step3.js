// Step3.js
import React from "react";

const Step3 = ({ formData, handleBack, handleSubmit }) => {
  return (
    <div>
      <h2>Step 3: Confirmation</h2>
      <pre>{JSON.stringify(formData, null, 2)}</pre>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Step3;
