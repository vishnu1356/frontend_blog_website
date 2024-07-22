import { useState } from "react";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import AllRoutes from "./Routes/AllRoutes"
import { Toaster } from 'react-hot-toast';
import PostInputContext from "../contex/utils";
import UserContext from "../contex/user";

function App() {
  const [inputText, setInputText] = useState("")
  const [username, setUsername] = useState("")
  return (

    <div>
      <PostInputContext.Provider value={{inputText, setInputText}}>
      <UserContext.Provider value={{username, setUsername}}>

        <Header />
        <AllRoutes />
        <Footer />
        <Toaster />

        </UserContext.Provider>
      </PostInputContext.Provider>
    </div>
  )
}

export default App;
