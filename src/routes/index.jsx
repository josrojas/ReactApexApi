import {
    createBrowserRouter,
    RouterProvider, BrowserRouter as Router
} from "react-router-dom";

import Navbar from './../components/Navbar';

import Home from "../views/Home";
import Upgrades from "../views/Upgrades";
import Error404 from "../views/Error404";

const router = createBrowserRouter([
    {
        path: '/maps',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/',
        element: <Upgrades />,
        errorElement: <Error404 />
    },
    {
        path: '*',
        element: <Error404 />
    },

    <Router>
        <Navbar />
    </Router>

]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;
