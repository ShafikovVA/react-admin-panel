import { createBrowserRouter } from "react-router-dom";

import HomePage from './pages/Home/HomePage.tsx';
import EditDataPage from './pages/EditDataPage.tsx';
import UsersPage from './pages/User/UsersPage.tsx';
import CreateUserPage from './pages/User/CreateUserPage.tsx';
import Layout from "./layouts/Layout.tsx";

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
        {
          path: "users",
          children: [
              {
                index: true,
                element: <UsersPage />,
              },
              {
                path: 'create',
                element: <CreateUserPage />
              }
          ]
        },
      ],
    },
    
  ]);

export default router;