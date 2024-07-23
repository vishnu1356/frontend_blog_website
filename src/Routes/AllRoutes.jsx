import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Detail from "../Pages/Detail/Detail";
import SignIn from "../Pages/Signin/Signin";
import SignUp from "../Pages/Signup/SignUp";
import CreatePost from "../Pages/CreatePost/CreatePost";
import ForgotPassoword from "../Pages/ForgotPassoword/ForgotPassoword";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";

const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route  path="/detail/:id" element={<Detail />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/forgot" element={<ForgotPassoword />} />
            <Route path="/reset/:id" element={<ResetPassword />} />

        </Routes>
    )
}

export default AllRoutes;