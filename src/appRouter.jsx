import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Kid from "./components/Kid";
import Men from "./components/Men";
import ProductCart from "./components/ProductList";
import Error from "./components/Error";
import ProductDetail from "./components/ProductDetail";

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
        path: "product/:prodId",
        element: <ProductDetail />
      }
    ],
  },
]);

export default appRouter;
