import React from "react";
import { useForm } from "react-hook-form";
import "./App.css";

const RegistrationForm = ({ onNext }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    onNext();
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Phone Number</label>
        <input
          {...register("phone", { required: "Phone number is required" })}
          type="text"
        />
        {errors.phone && <span>{errors.phone.message}</span>}

        <label>Confirm Phone Number (Code: 1234)</label>
        <input
          {...register("phoneCode", { required: "Phone code is required" })}
          type="text"
        />
        {errors.phoneCode && <span>{errors.phoneCode.message}</span>}

        <label>Email</label>
        <input
          {...register("email", { required: "Email is required" })}
          type="email"
        />
        {errors.email && <span>{errors.email.message}</span>}

        <label>Password</label>
        <input
          {...register("password", { required: "Password is required" })}
          type="password"
        />
        {errors.password && <span>{errors.password.message}</span>}

        <button type="submit">Next</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
