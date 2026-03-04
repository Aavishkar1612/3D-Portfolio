import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout";
import Hero from "../components/sections/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
]);

export default router;