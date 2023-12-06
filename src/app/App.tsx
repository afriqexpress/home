import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/home/home";
import AfriQExpress from "../pages/afriqexpress";
import AfriQPay from "../pages/afriqpay";
import AfriQTrans from "../pages/afriqtrans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
    element: <AfriQTrans />
  }

]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
