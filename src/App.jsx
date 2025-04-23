import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { PropertiesIndexPage } from "./PropertiesIndexPage";
import { Footer } from "./Footer";
import { PropertiesPage } from "./PropertiesPage";
import { PropertiesNewPage } from "./PropertiesNewPage";
import { PropertiesShowPage } from "./PropertiesShowPage";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { LogoutLink } from "./LogoutLink";
import { HomePage } from "./HomePage";
import { UpdatePageWrapper } from "./UpdatePageWrapper";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "logout",
        element: <LogoutLink />,
      },
      {
        path: "/properties/:id/update",
        element: <UpdatePageWrapper />,
        loader: ({ params }) => axios.get(`/properties/${params.id}.json`).then((response) => response.data),
      },
      {
        path: "properties/new",
        element: <PropertiesNewPage />,
      },
      {
        path: "/properties/:id",
        element: <PropertiesShowPage />,
        loader: ({ params }) => axios.get(`/properties/${params.id}.json`).then((response) => response.data),
      },

      {
        path: "/properties",
        element: <PropertiesIndexPage />,
        loader: () => axios.get("/properties.json").then((response) => response.data),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
