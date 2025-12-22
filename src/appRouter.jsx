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
        path: "about",
        element: <About />,
      },
      {
        path: "grocery",
        element: <Suspense fallback={<h1>Loading...</h1>}><Grocery /></Suspense> ,
      },
      {
        path: "product/:prodId",
        element: <ProductDetail />
      }
    ],
  },
]);

export default appRouter;
