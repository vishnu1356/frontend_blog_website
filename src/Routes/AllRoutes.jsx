import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/SignUp";
import CreatePost from "../Pages/CreatePost/CreatePost";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/detail/:id" element={<Detail />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createpost" element={<CreatePost />} />

        </Routes>
    )
}

export default AllRoutes;