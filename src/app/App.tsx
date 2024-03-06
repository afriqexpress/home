import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Home from "../pages/home/home";
import AfriQExpress from "../pages/afriqexpress/afriqexpress";
import AfriQTrans from "../pages/afriqtrans/afriqtrans";
import NewAbout from "../pages/newaboutus/NewAbout";
import AfriqPay from "../pages/afriqpaypage/AfriqPay";
import AfriqPayExpress from "../pages/afriqpayexpress/AfriqPayExpress";
import { I18nextProvider } from "react-i18next";
import i18n from "../../i18n";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/AboutUs",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/AfriQPay",
  //   element: <AfriQPay />,
  // },
  {
    path: "/AfriQExpress",
    element: <AfriQExpress />,
  },
  {
    path: "/AfriQTrans",
    element: <AfriQTrans />,
  },
  {
    path: "/aboutus",
    element: <NewAbout />,
  },
  {
    path:'/afriqpay',
    element: <AfriqPay />
  },
  {
    path:'afriqpayexpress',
    element:<AfriqPayExpress />
  }

]);


function App() {
  const slideInTransition = {
    initial: { opacity: 0, },
    animate: { opacity: 1,},
    exit: { opacity: 0, },
    transition: { delay: 0.3, ease: "easeInOut" ,duration: 1 }, // Adjust the delay and ease as needed
  };
  return (
    // <AnimatePresence>
    // <RouterProvider router={router}/>
    // </AnimatePresence>
    <I18nextProvider i18n={i18n}>
    <AnimatePresence>
    <motion.div  {...slideInTransition}  >
      <RouterProvider router={router}/>
    </motion.div>
  </AnimatePresence>
  </I18nextProvider>
  );
}

export default App;
