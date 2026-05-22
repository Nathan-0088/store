import { RouterProvider } from "react-router";
import { router } from "./routes";
import { ToastContainer } from "react-toastify";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer autoClose={1500} />
    </>
  );
}
