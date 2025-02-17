import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./App.css";

const ProfileInfoForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [countries, setCountries] = useState([]);
  const [cities, setCities] = useState([]);
  const selectedCountry = watch("country");

  useEffect(() => {
    axios
      .get("https://countriesnow.space/api/v0.1/countries")
      .then((response) => {
        const countryList = response.data.data.map((country) => ({
          name: country.country,
          cities: country.cities,
        }));
        setCountries(countryList);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;

    const countryData = countries.find((c) => c.name === selectedCountry);
    if (countryData) {
      setCities(countryData.cities);
    }
  }, [selectedCountry, countries]);

  const onSubmit = (data) => {
    console.log("User data:", data);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Country</label>
        <select {...register("country", { required: "Country is required" })}>
          <option value="">Select a country</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.country && <span>{errors.country.message}</span>}

        <label>City</label>
        <select {...register("city", { required: "City is required" })}>
          <option value="">Select a city</option>
          {cities.length > 0 ? (
            cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))
          ) : (
            <option disabled>No cities available</option>
          )}
        </select>
        {errors.city && <span>{errors.city.message}</span>}

        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default ProfileInfoForm;
