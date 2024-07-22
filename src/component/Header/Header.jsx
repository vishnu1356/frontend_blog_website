import { useContext } from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import PostInputContext from "../../../contex/utils";
import UserContext from "../../../contex/user";


const Header = () => {
    const {inputText, setInputText} = useContext(PostInputContext);
    const {username, setUsername} = useContext(UserContext);


    function handleLogout () {
        setUsername("")
    }

    return (
            <>

            <header className="header">
                <Link to={"/"}    className="logo">
                    <img src="https://whizamet.com/assets/img/Whizametlogo.webp" alt="Logo"/>
                </Link>
                <div className="search-bar">
                    <input type="text"  value={inputText} onChange={(e) => setInputText(e.target.value)}  placeholder="Enter blog name..."/>
                    
                </div>
                <div className="user-info">
                    <span>{username}</span>
                    {
                        (username) ? <Link class="login-btn" onClick={handleLogout}>Logout</Link> : <Link to={"/signin"}class="login-btn">Login</Link>
                    }
                    <Link to={"/signup"} class="signup-btn">Sign Up</Link>
                </div>
            </header>
            </>

    )
}

export default Header;