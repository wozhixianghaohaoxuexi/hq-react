import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const router = createBrowserRouter([
{
    path: '/',
    element: <Home></Home>
    // lazy: () => import('../pages/Home')
}
])

export default router;