import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginUsername from "./components/Login/LoginUsername";
import LoginPassword from "./components/Login/LoginPassword";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Layout from "./Layout";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth/username" element={<LoginUsername />} />
            <Route path="/auth/login" element={<LoginPassword />} />
            <Route path="/feed" element={<Feed />} />
        </Route>
    )
);

export default routes;
