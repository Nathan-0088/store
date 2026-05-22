import { createBrowserRouter } from "react-router";

import Home from "./pages/Home";
import Detalhes from "./pages/Detalhes";
import Layout from "./layout";
import Carrinho from "./pages/Carrinho";
import Error from "./pages/Error";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/detalhes/:id",
        element: <Detalhes />,
      },
      {
        path: "/carrinho",
        element: <Carrinho />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);
