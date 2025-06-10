import { RouterProvider } from "react-router-dom";
import { router } from "./rotas/routes";

export function App() {
  return (
    <RouterProvider router={router}/>
  )
}
