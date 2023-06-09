import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import LoginUsername from "./components/Login/LoginUsername";
import LoginPassword from "./components/Login/LoginPassword";
import Signup from "./components/Signup";
import Feed from "./components/Feed";
import Layout from "./Layout";
import MyProfile from "./components/MyProfile";
import MyAccount from "./components/MyAccount";
import Posts from "./components/Posts";
import Search from "./components/Search";
import Connections from "./components/Connections";
import ConnectionProfile from "./components/Connections/Profile";

const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={ localStorage.getItem('token') ? <Feed /> : <LoginUsername /> } />
            <Route path="/signup" element={<Signup />} />
            <Route path="/auth/username" element={<LoginUsername />} />
            <Route path="/auth/login" element={<LoginPassword />} />
            <Route path="/feed" element={<Feed />} />
            <Route path="/profile" element={<MyProfile />} />
            <Route path="/account" element={<MyAccount />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/search" element={<Search />} />
            <Route path="/connections" element={<Connections />} />
            <Route path="/connection/:username" element={<ConnectionProfile />} />
        </Route>
    )
);

export default routes;
