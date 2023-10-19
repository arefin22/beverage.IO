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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement:<ErrorPage/>, 
      children:[
        {
            path: '/',
            element: <Home />,
            loader : () => fetch('/data.json')
        },
        {
            path:'/register',
            element: <UserRegister />
        },
        {
            path:'/login',
            element: <UserLogin />
        },
        {
            path:'/addItem',
            element: <AddItem />
        },
        {
            path:'/editItem',
            element: <EditItem />
        },
        {
            path:'/brands',
            element: <Brands />,
            loader : () => fetch('/data.json')
        },
        {
            path:'/items',
            element: <Items />,
            loader : () => fetch('/data.json')
        },
        
      ],
    },
  ]);

export default router;
