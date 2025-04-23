import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import { PropertiesNew } from "./PropertiesNew";

export function PropertiesNewPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState([]);

  const handleCreate = (params) => {
    console.log("handleCreate", params);
    setErrors([]); // clear previous errors
    axios
      .post("/properties.json", params)
      .then((response) => {
        console.log(response);
        navigate("/properties");
      })
      .catch((error) => {
        const err = error.response?.data;
        if (err?.errors) {
          setErrors(err.errors);
        } else if (err?.error) {
          setErrors([err.error]);
        } else {
          setErrors(["Something went wrong."]);
        }
      });
  };

  return (
    <div>
      {errors.length > 0 && (
        <ul className="mb-4 list-disc list-inside text-red-600">
          {errors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      )}
      <PropertiesNew onCreate={handleCreate} />
    </div>
  );
}
