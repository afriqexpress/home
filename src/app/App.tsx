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
import NewAbout from "../pages/newaboutus/NewAbout";
import AfriqPay from "../pages/afriqpaypage/AfriqPay";
import AfriqPayExpress from "../pages/afriqpayexpress/AfriqPayExpress";

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
  {
    path: "/newabout",
    element: <NewAbout />,
  },
  {
    path:'/afriqpaypage',
    element: <AfriqPay />
  },
  {
    path:'afriqpayexpress',
    element:<AfriqPayExpress />
  }

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
