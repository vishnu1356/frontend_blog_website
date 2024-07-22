import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";


const Detail = () => {

    const [singlePost, setSinglePost] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const {id} = useParams()
    const navigator = useNavigate()


    async function downloadSinglePost() {
        try {
            let response = await axios.get(`http://localhost:3131/api/v1/blog/${id}`)
            console.log(response.data)
            setSinglePost(response.data)
        } catch (error) {
            console.log("Error caught by singlePost download")
        }
    }

    const deletePost= async()=> {
        console.log("function called!")
        try {
            await axios.delete(`http://localhost:3131/api/v1/blog/${id}`)
            toast.success("Post Delete Successfully")
            // onDelete()
            navigator("/")
        } catch (error) {
            console.log("Error Caught by delete Post!",error)
        }
    }



    useEffect(()=> {
        downloadSinglePost()
    }, [])

    return (
        <div class="w-[400px] rounded-md border mx-[36%] mt-16 mb-16">
            <img
                src={singlePost.imgurl}
                alt="Laptop"
                class="h-[200px] w-full rounded-md object-cover"
            />
            <div class="p-4">
                <h1 class="text-lg font-semibold">{singlePost.title}</h1>
                <p class="mt-3 text-sm text-gray-600">
                    {singlePost.description}
                </p>

                {/* <button
                    type="button"
                    class="mt-4 w-full rounded-sm bg-green-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Edit Post
                </button> */}
                <button
                    onClick={deletePost}
                    type="button"
                    class="mt-4 w-full rounded-sm bg-red-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-red-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Delete Post
                </button>
            </div>
        </div>

    )
}

export default Detail;