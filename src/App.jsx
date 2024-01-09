// eslint-disable-next-line no-unused-vars
import { useState } from "react";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
// eslint-disable-next-line no-unused-vars
import Order, { loader as orderLoader } from "./features/order/Order";
import CreateOrder, {
  action as createOrderAction,
} from "./features/order/CreateOrder";
import Cart from "./features/cart/Cart";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import "./utils/index.css";
import ProtectedRoute from "./ui/ProtectedRoute"
// eslint-disable-next-line no-unused-vars
import {action as UpdateOrderAction} from "./features/order/UpdateOrder"
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/menu", element: <ProtectedRoute><Menu /></ProtectedRoute>, loader: menuLoader },
      { path: "/cart", element: <ProtectedRoute><Cart /></ProtectedRoute> },
      { path: "/order/:orderid", element: <ProtectedRoute><Order /></ProtectedRoute>, loader: orderLoader,action:UpdateOrderAction},
      {
        path: "/order/new",
        element: <ProtectedRoute><CreateOrder /></ProtectedRoute>,
        action: createOrderAction,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
