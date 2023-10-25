import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "../pages/home";
import AfriQExpress from "../pages/afriqexpress";
import AfriQPay from "../pages/afriqpay";

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
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
