import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Suspense } from "react";

import Home from "../views/Home";
import Server from "../views/ServerStatus";
import Error404 from "../views/Error404";
import ErrorBoundary from "../components/ErrorBoundary";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/server-status',
        element: <Server />,
        errorElement: <Error404 />
    },
    {
        path: '*',
        element: <Error404 />
    },

]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;
