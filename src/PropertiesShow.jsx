import { Link } from "react-router-dom";

export function PropertiesShow({ property, onDestroy }) {
  return (
    <div className="max-w-3xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <div className="mb-6">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Property Information</h1>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-medium">Title:</span> {property.title}
        </p>
        <img src={property.image} alt={property.title} className="w-full h-64 object-cover rounded-lg mb-4" />
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Description:</span> {property.description}
        </p>
        <p className="text-gray-700 mb-2">
          <span className="font-medium">Price Per Night:</span> ${property.price_per_night}
        </p>
        <p className="text-gray-700 mb-4">
          <span className="font-medium">Max Guests:</span> {property.max_guests}
        </p>
      </div>

      <div>
        <Link
          to="/"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Back to all Home Page
        </Link>
      </div>
      <div>
        <Link
          to="update"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Update Property
        </Link>
      </div>
      <button
        onClick={() => onDestroy(property)}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200 shadow-sm"
      >
        Destroy
      </button>
    </div>
  );
}
