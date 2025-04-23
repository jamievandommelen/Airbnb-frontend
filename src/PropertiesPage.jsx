import { PropertiesIndex } from "./PropertiesIndex";
import axios from "axios";
import { useState, useEffect } from "react";
import { PropertiesNew } from "./PropertiesNew";
import { PropertiesShow } from "./PropertiesShow";

export function PropertiesPage() {
  const [properties, setProperties] = useState([]);
  const [currentProperty, setcurrentProperty] = useState({});

  const handleIndex = () => {
    console.log("handleIndex");
    axios.get("/properties.json").then((response) => {
      console.log(response.data);
      setProperties(response.data);
    });
  };

  const handleCreate = (params, successCallback) => {
    console.log("handleCreate");
    axios.post("/properties.json", params).then((response) => {
      setProperties([...properties, response.data]);
      successCallback();
    });
  };

  const handleShow = (property) => {
    console.log("handleShow", property);
    setIsPropertiesShowVisible(true);
    setcurrentProperty(property);
  };

  const handleDestroy = (property) => {
    console.log("handleDestroy", property);
    axios.delete(`/properties/${property.id}.json`).then(() => {
      setProperties(properties.filter((p) => p.id !== property.id));
      setisPropertiesShowVisible(false);
    });
  };

  useEffect(handleIndex, []);

  return (
    <main>
      <PropertiesIndex properties={properties} onDestroy={handleDestroy} />
    </main>
  );
}
