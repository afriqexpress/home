import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/home/home";
import AfriQExpress from "../pages/afriqexpress/afriqexpress";
import AfriQPay from "../pages/afriqpay/afriqpay";
import AfriQTrans from "../pages/afriqtrans/afriqtrans";
import AboutUs from "../pages/aboutus/aboutus";

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
