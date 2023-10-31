"use client";
import { useState } from "react";

export default function HeroForm() {
  const options = [
    { value: "", text: "--Choose an option--" },
    { value: "first-option", text: "Choose one" },
    { value: "second-option", text: "Choose one" },
    { value: "third-option", text: "Choose one" },
  ];

  const [selected, setSelected] = useState(options[0].value);

  const handleChange = (event) => {
    // console.log(event.target.value);
    setSelected(event.target.value);
  };

  return (
    <>
      <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Get a Free Estimate</h2>

        <div className="mb-4">
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-4">
          <input
            type="text"
            id="phone"
            name="phone"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200"
            placeholder="Phone"
            required
          />
        </div>

        <div className="mb-4">
          <select
            id="contact"
            name="contact"
            className="w-full px-4 py-2 rounded border border-gray-300 focus:ring focus:ring-blue-200"
            value={selected}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.text}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Submit
        </button>
      </div>
    </>
  );
}
