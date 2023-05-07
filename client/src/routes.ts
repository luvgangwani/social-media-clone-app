import { createBrowserRouter } from "react-router-dom";
import LoginUsername from "./components/Login/LoginUsername";
import LoginPassword from "./components/Login/LoginPassword";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Feed from "./components/Feed";

const routes = createBrowserRouter([
    {
        path: '/',
        Component: Home
    },
    {
        path: '/signup',
        Component: Signup
    },
    {
        path: '/auth/username',
        Component: LoginUsername
    },
    {
        path: '/auth/login',
        Component: LoginPassword
    },
    {
        path: 'feed',
        Component: Feed,
    }
]);

export default routes;
