import {createBrowserRouter} from "react-router-dom";

import HomePage from './pages/Home/HomePage.tsx';
import EditDataPage from './pages/EditDataPage.tsx';
import Layout from "./pages/layouts/Layout.tsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "EditDataPage",
          element: <EditDataPage />,
        },
      ],
    },
    
  ]);

export default router;