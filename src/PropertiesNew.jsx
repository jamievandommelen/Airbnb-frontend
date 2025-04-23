export function PropertiesNew({ onCreate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    const successCallback = () => form.reset();
    onCreate(params, successCallback);
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-md">
      <h1 className="text-2xl font-semibold mb-6 text-gray-800">New Property</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            name="title"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            name="image"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            name="description"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
          <input
            name="address"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Price per Night</label>
          <input
            name="price_per_night"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Max Guests</label>
          <input
            name="max_guests"
            type="text"
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        <button
          type="submit"
          className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Create
        </button>
      </form>
    </div>
  );
}
