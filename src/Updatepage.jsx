import { useLoaderData } from "react-router-dom";
// // import { useEffect, useState } from "react";
// import axios from "axios";

export function Updatepage({ onUpdate }) {
  const property = useLoaderData();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onUpdate(property, params, successCallback);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-md space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Update Property</h2>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Title</label>
        <input
          defaultValue={property.title}
          name="title"
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Description</label>
        <input
          defaultValue={property.description}
          name="description"
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Price Per Night</label>
        <input
          defaultValue={property.price_per_night}
          name="price_per_night"
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-gray-700 mb-1">Max Guests</label>
        <input
          defaultValue={property.max_guests}
          name="max_guests"
          type="number"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-rose-500 text-white font-medium py-2 px-4 rounded-lg hover:bg-rose-600 transition"
      >
        Update Property
      </button>
    </form>
  );
}
