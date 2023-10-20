import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import UserRegister from "../pages/UserRegister";
import UserLogin from "../pages/UserLogin";
import AddItem from "../pages/AddItem";
import Brands from "../pages/Brands";
import EditItem from "../pages/EditItem";
import Items from "../pages/Items";
import Users from "../pages/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('https://beverage-server-site.vercel.app/brands')
          // fetch('https://beverage-server-site.vercel.app/items')
      },
      {
        path: '/register',
        element: <UserRegister />
      },
      {
        path: '/login',
        element: <UserLogin />
      },
      {
        path: '/addItem',
        element: <AddItem />
      },
      {
        path: '/editItem',
        element: <EditItem />
      },
      {
        path: '/brands',
        element: <Brands />,
        loader: () => fetch('https://beverage-server-site.vercel.app/brands')
      },
      {
        path: '/items',
        element: <Items />,
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch(`https://beverage-server-site.vercel.app/users`)
      },

    ],
  },
]);

export default router;
