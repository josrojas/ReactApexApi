import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import { Suspense } from "react";

import Home from "../views/Home";
import Error404 from "../views/Error404";
import ErrorBoundary from "../components/ErrorBoundary";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        errorElement: <Error404 />
    },
    {
        path: '/detail/:eventId',
        element: (
            <Suspense fallback={<div>Cargando...</div>}>
                <ErrorBoundary fallback={<div>Ha ocurrido un error al obtener el detalle</div>}>
                    <Detail />
                </ErrorBoundary>
            </Suspense>
        )
    },
]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;
