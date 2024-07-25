import { Link } from "react-router-dom";
import Post from "../../component/Post/Post";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import PostInputContext from "../../../contex/utils";

const Home = () => {

    const [data, setData] = useState([]);
    const [filterData, setFilterData] = useState([])
    const [updateDelete, setUpdateDelete] = useState(false);
    const {inputText, setInputText} = useContext(PostInputContext)

    async function fetchAllUser () {
        const response = await axios.get('http://localhost:3131/api/v1/blogs');
        setData(response.data)
        setFilterData(response.data)

    }

    console.log("all new data is:",data)

    function filterPostByInput () {
        const filteredPost = data.filter((item) => item.title.toLowerCase().includes(inputText.toLowerCase()))
        setFilterData([...filteredPost]);

    }


    function onDelteUpdate() {
        setUpdateDelete(!updateDelete)
    }

    useEffect(() =>  {
        console.log("Useeffect one called")
        filterPostByInput()
    }, [inputText])


    useEffect(() => {
        console.log("Use Effect two called")
        fetchAllUser()

    }, [updateDelete])





    return (
        <div>
            <div className="flex justify-center">
                <Link to={"/createpost"} className="bg-four text-white  px-5 py-2 mt-8 rounded-sm">Create Post</Link>
            </div>
            <div className="flex g-8 flex-wrap justify-center mt-8 mb-4">
                {/* <Post /> */}
                {
                    filterData && filterData.map((item) => (
                        <Post title={item.title} 
                            onDelete={onDelteUpdate}
                         id={item._id} key={item._id} imgurl={item.blogimg} description={item.description}/>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;