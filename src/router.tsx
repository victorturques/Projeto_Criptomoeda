import { createBrowserRouter } from "react-router-dom";

import  Home  from "./pages/home";
import  Detail  from "./pages/detail";
import  Notfound  from "./pages/notfound";
import  { Layout }  from "./components/layout";

const router = createBrowserRouter([
{
    element: <Layout />,
    children: [{
        path: "/<Projeto_Criptomoeda>",
        element: <Home />
    }, {
        path: "/detail/:cripto",
        element: <Detail />
    }, {
        path: "*",
        element: <Notfound />
    }]
}
])

export  { router }