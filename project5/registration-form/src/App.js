import React, { useState } from "react";
import RegistrationForm from "./RegistrationForm";
import ProfileInfoForm from "./ProfileInfoForm";

const App = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep(2);
  };

  return (
    <div>
      {step === 1 && <RegistrationForm onNext={handleNext} />}
      {step === 2 && <ProfileInfoForm />}
    </div>
  );
};

export default App;
