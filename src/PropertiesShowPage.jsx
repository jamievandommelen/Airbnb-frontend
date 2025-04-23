import axios from "axios";
import { useLoaderData, useNavigate } from "react-router-dom";

import { PropertiesShow } from "./PropertiesShow";

export function PropertiesShowPage() {
  const property = useLoaderData();
  const navigate = useNavigate();

  const handleUpdate = (property, params) => {
    console.log("handleUpdate", property);
    axios.patch(`/properties/${property.id}.json`, params).then(() => {
      navigate("/properties");
    });
  };

  const handleDestroy = (property) => {
    console.log("handleDestroy", property);
    axios.delete(`/properties/${property.id}.json`).then(() => {
      navigate("/properties");
    });
  };

  return (
    <div>
      <PropertiesShow property={property} onUpdate={handleUpdate} onDestroy={handleDestroy} />
    </div>
  );
}
