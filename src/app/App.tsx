import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/home/home";
import AfriQExpress from "../pages/afriqexpress";
import AfriQPay from "../pages/afriqpay";
import AfriQTrans from "../pages/afriqtrans";
import AboutUs from "../pages/aboutus";
import Contact from "../pages/contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/AboutUs",
    element: <AboutUs />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/AfriQPay",
    element: <AfriQPay />,
  },
  {
    path: "/AfriQExpress",
    element: <AfriQExpress />,
  },
  {
    path: "/AfriQTrans",
    element: <AfriQTrans />,
  },

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
