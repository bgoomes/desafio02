import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout/layout";
import { Frontend } from "../page/Frontend";
import { Backend } from "../page/Backend";
import { Fullstack } from "../page/Fullstack";
import { Uiux } from "../page/Uiux";

export const router = createBrowserRouter([
  {
        element: <Layout />,
        children: [
            {path: "/", element: <Frontend />},
            {path: "/frontend", element: <Frontend />},
            {path: "/backend", element: <Backend />},
            {path: "/fullstack", element: <Fullstack />},
            {path: "/uiux", element: <Uiux />},
        ]
    }
])