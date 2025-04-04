import axios from "axios";
import { Header } from "./Header";
import { PropertiesPage } from "./PropertiesPage";
import { Footer } from "./Footer";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Header />
      <PropertiesPage />
      <Footer />
    </div>
  );
}

export default App;
