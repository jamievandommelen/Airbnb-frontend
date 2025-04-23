import { Updatepage } from "./Updatepage";
import axios from "axios";
import { useNavigate, useLoaderData } from "react-router-dom";

export function UpdatePageWrapper() {
  const property = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (property, params, successCallback) => {
    axios.patch(`/properties/${property.id}.json`, params).then(() => {
      successCallback();
      navigate("/properties"); // Or redirect wherever you want
    });
  };

  return <Updatepage property={property} onUpdate={handleUpdate} />;
}
