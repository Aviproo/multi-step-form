import React, { useState, useEffect } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import "./style.css";

const Form = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const data = localStorage.getItem("formData");
    if (data) {
      setFormData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    if (validateForm()) {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const handleBack = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
    localStorage.removeItem("formData");
  };

  const validateForm = () => {
    let newErrors = {};
    switch (step) {
      case 0:
        if (!formData.name) newErrors.name = "Name is required";
        if (!formData.email) newErrors.email = "Email is required";
        if (!formData.phone) newErrors.phone = "Phone is required";
        break;
      case 1:
        if (!formData.address1)
          newErrors.address1 = "Address Line 1 is required";
        if (!formData.city) newErrors.city = "City is required";
        if (!formData.state) newErrors.state = "State is required";
        if (!formData.zip) newErrors.zip = "Zip Code is required";
        break;
      default:
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <Step1
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            errors={errors}
          />
        );
      case 1:
        return (
          <Step2
            formData={formData}
            setFormData={setFormData}
            handleNext={handleNext}
            handleBack={handleBack}
            errors={errors}
          />
        );
      case 2:
        return (
          <Step3
            formData={formData}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <h1>Multi-Step Form</h1>
      {renderStep()}
    </div>
  );
};

export default Form;
