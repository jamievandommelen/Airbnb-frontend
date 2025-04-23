import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function LoginPage() {
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/sessions.json", params)
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("email", response.data.email);
        event.target.reset();
        navigate("/properties", { state: { message: "successfully logged in!'" } });
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };

  return (
    <div id="login" className="max-w-md mx-auto mt-10 p-6 bg-white shadow-md rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Login</h1>

      {errors.length > 0 && (
        <ul className="mb-4 list-disc list-inside text-red-600">
          {errors.map((error) => (
            <li key={error}>{error}</li>
          ))}
        </ul>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input
            name="email"
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <input
            name="password"
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
}
