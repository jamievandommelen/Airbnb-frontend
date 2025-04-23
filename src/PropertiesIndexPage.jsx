import { useLoaderData, useNavigate } from "react-router-dom";

import { PropertiesIndex } from "./PropertiesIndex";

export function PropertiesIndexPage() {
  const properties = useLoaderData();
  const navigate = useNavigate();

  const handleShow = (property) => {
    console.log("handleShow", property);
    navigate(`/properties/${property.id}`);
  };

  return (
    <div>
      <PropertiesIndex properties={properties} />
    </div>
  );
}
