import { Link } from "react-router-dom";

export function PropertiesIndex({ properties }) {
  return (
    <div className="px-6 py-8">
      <h1 className="text-3xl font-bold mb-6">All Properties: {properties.length}</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            <img src={property.image} alt={property.title} className="w-full h-60 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{property.title}</h2>
              <p className="text-gray-600 text-sm mb-2">{property.description}</p>
              <div className="flex justify-between text-sm text-gray-700">
                <span>${property.price_per_night}/night</span>
                <span>👥 {property.max_guests} guests</span>
              </div>
              <Link to={`/properties/${property.id}`}>More Info</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
