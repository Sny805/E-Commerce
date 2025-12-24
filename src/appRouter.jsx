import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Kid from "./components/Kid";
import Men from "./components/Men";
import ProductCart from "./components/ProductList";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";
import Women from "./components/Women";
import About from "./components/About";
import { lazy, Suspense } from "react";
import Cart from "./components/cart";
import Login from "./components/Login";

// lazy loading
//Code Splitting
//Dynamic import

const Grocery =lazy(()=>import("./components/Grocery"))

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <ProductCart />,
      },
       {
        path: "about",
       element: <Suspense fallback={<h1>Loading...</h1>}><About /></Suspense> ,
      },
      {
        path: "grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> ,
      },
      {
        path: "kid",
        element: <Kid />,
      },
      {
        path: "men",
        element: <Men />,
      },
      {
        path: "women",
        element: <Women />,
      },
       {
        path: "cart",
        element: <Cart />,
      },
     
      {
        path: "product/:prodId",
        element: <ProductDetail />
      },
       {
        path: "login",
        element: <Login />,
      },

        
    ],
  },
]);

export default appRouter;
