import { useState } from "react";
import "./App.css";

function App() {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const countries = [
    {
      name: "India",
      value: "IN",
      cities: ["Delhi", "Mumbai"],
    },
    {
      name: "Pakistan",
      value: "PAK",
      cities: ["Lahore", "Karachi"],
    },

    {
      name: "Bangladesh",
      value: "BAN",
      cities: ["Dhaka", "Chittagong"],
    },
  ];

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
    setSelectedCity(""); // Reset the city dropdown when the country changes
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  // Find the selected country object to get its cities
  const selectedCountryObject = countries.find(
    (country) => country.value === selectedCountry
  );

  return (
    <div>
      <div>
        <label htmlFor="countryDropdown">Select Country:</label>
        <select
          id="countryDropdown"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          <option value="">--Please choose a country--</option>
          {countries.map((country) => (
            <option key={country.value} value={country.value}>
              {country.name}
            </option>
          ))}
        </select>
      </div>

      {selectedCountry && (
        <div>
          <label htmlFor="cityDropdown">Select City:</label>
          <select
            id="cityDropdown"
            value={selectedCity}
            onChange={handleCityChange}
          >
            <option value="">--Please choose a city--</option>
            {selectedCountryObject?.cities.map((city, index) => (
              <option key={index} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>
      )}

      <div>
        <p>
          You selected: {selectedCountryObject?.name} - {selectedCity}
        </p>
      </div>
    </div>
  );
}

export default App;
