"use client";
// import { useState } from "react";

export default function HeroForm() {
  // const options = [
  //   { }
  //   { value: "first-option", text: "Choose one" },
  //   { value: "second-option", text: "Choose one" },
  //   { value: "third-option", text: "Choose one" },
  // ];

  // const [selected, setSelected] = useState(options[0].value);

  // const handleChange = (event) => {
  //   // console.log(event.target.value);
  //   setSelected(event.target.value);
  // };

  return (
    <>
      <div className="flex items-center justify-center flex-col w-72 px-4 mt-7 mb-16 bg-neutral rounded shadow-md">
        <h2 className="text-gray text-xl font-semibold my-6 pt-2">
          Get a Free Estimate
        </h2>

        <div className="mb-3">
          <input
            type="text"
            id="name"
            name="name"
            className="bg-neutral-n00 placeholder-neutral-n04 border-transparent w-full px-6 py-2 rounded-sm border "
            placeholder="Name"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            id="email"
            name="email"
            className="bg-neutral-n00 placeholder-neutral-n04 border-transparent w-full px-6 py-2 rounded-sm border border-gray-300"
            placeholder="Email"
            required
          />
        </div>

        <div className="mb-3">
          <input
            type="text"
            id="phone"
            name="phone"
            className="bg-neutral-n00 placeholder-neutral-n04 border-transparent w-full px-6 py-2 rounded-sm border border-gray-300"
            placeholder="Phone"
            required
          />
        </div>

        <div className="mb-5">
          <select className="w-full px-6 py-2 font-light text-base text-neutral-n04 border border-neutral-n11 rounded-sm">
            <option selected>Best time to reach you?</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-primary text-neutral py-1 px-20 mb-12 rounded-full"
        >
          Submit
        </button>
      </div>
    </>
  );
}
