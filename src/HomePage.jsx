import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export function HomePage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    event.preventDefault();
    axios.get(`/properties.json?query=${query}`).then((response) => {
      setResults(response.data);
    });
  };

  return (
    <div
      className="relative min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      {/* Optional dreamy overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-md"></div>

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-extrabold mb-10 text-center text-rose-600 drop-shadow-md">
          Find Your Next Dream Stay
        </h1>

        <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 mb-10">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Try 'Santorini', 'Treehouse', or 'Ocean View'"
            className="flex-1 px-5 py-3 text-lg border border-gray-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-rose-400"
          />
          <button
            type="submit"
            className="px-6 py-3 bg-rose-500 text-white text-lg font-semibold rounded-full shadow hover:bg-rose-600 transition"
          >
            Search
          </button>
        </form>

        <div className="grid gap-6 sm:grid-cols-2">
          {results.map((property) => (
            <div
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={property.image || "https://via.placeholder.com/400x250?text=Your+Stay"}
                alt={property.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{property.title}</h2>
                <p className="text-gray-500">{property.address}</p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">${property.price_per_night}</span> / night
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
