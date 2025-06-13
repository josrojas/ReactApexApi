import {
    createBrowserRouter,
    RouterProvider, BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import Navbar from './../components/Navbar';
import Ash from './../components/events/UpgradeLegends/Assault/Ash';
import Ballistic from './../components/events/UpgradeLegends/Assault/Ballistic';
import Bangalore from './../components/events/UpgradeLegends/Assault/Bangalore';
import Fuse from './../components/events/UpgradeLegends/Assault/Fuse';
import Maggie from './../components/events/UpgradeLegends/Assault/Maggie';

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
        <Routes>
            <Route path="/legends-upgrade" element={<Ash />} />
            <Route path="/legends-upgrade" element={<Ballistic />} />
            <Route path="/legends-upgrade" element={<Bangalore />} />
            <Route path="/legends-upgrade" element={<Fuse />} />
            <Route path="/legends-upgrade" element={<Maggie />} />
            {/* TODO */}
        </Routes>
    </Router>

]);

const MyRoutes = () => <RouterProvider router={router} />

export default MyRoutes;
