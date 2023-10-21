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
import Details from "../pages/Details";
import Cart from "../components/Cart";
import PrivateRoute from "../Auth/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/brands')
          // fetch('http://localhost:5000/items')
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
        element: <PrivateRoute><AddItem /></PrivateRoute>
      },
      {
        path: '/editItem/:id',
        element: <PrivateRoute><EditItem /></PrivateRoute>
      },
      {
        path: '/brands',
        element: <Brands />,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: '/items/:id',
        element: <Items />,
        // loader:() => fetch('http://localhost:5000/items')
      },
      {
        path: '/users',
        element: <Users />,
        loader: () => fetch(`http://localhost:5000/users`)
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details /></PrivateRoute>,
        // loader: ({params}) => fetch(`http://localhost:5000/items/${params._id}`)
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart /></PrivateRoute>,
        loader: () => fetch(`http://localhost:5000/cart`)
      },
      

    ],
  },
]);

export default router;
