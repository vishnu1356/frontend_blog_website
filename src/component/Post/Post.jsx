import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const Post = (porps) => {

    const { title, imgurl, description, id, onDelete } = porps;
    // console.log("imgurl is", imgurl)
    console.log("baseUrl is", import.meta.env.VITE_BASE_URL+imgurl)

    const [isEdit, setIsEdit] = useState(false)

    const [upDataForm, setUpdataForm] = useState({
        imgurl: imgurl, title: title,  description: title,
    })


    function handleUpdateFormData (e) {
        const {name, value} = e.target;
        setUpdataForm({
            ...upDataForm,
            [name]:value
        })
    }




    async function deletePost() {
        try {
            const response = await axios.delete(`http://localhost:3131/api/v1/blog/${id}`)
            toast.success("Post Delete Successfully")
            onDelete()
        } catch (error) {
            console.log("Error Caught by delete Post!", error)
        }
    }   
    
    async function submitUpdatedFormData() {
        try {
            const response = await axios.patch(`http://localhost:3131/api/v1/blog/${id}`, upDataForm,  {
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: 'Bearer your_token_here' // Add any other headers as needed
                }
            })
            toast.success("Post Update Successfully")
            onDelete()
            setIsEdit(false)
        } catch (error) {
            console.log("Error Caught by submitUpdatedFormData !",error)
        }
    }



    return (
        <div class="w-[300px] rounded-md border">
            {
                (isEdit) ? 
                (
                    <>

                        {/* image URL */}
                        <div>
                        <label for="url" class="text-base font-medium text-gray-900">
                            {" "}
                            Image URL{" "}
                        </label>
                        <div class="mt-2">                           
                            <input
                                onChange={handleUpdateFormData}
                                value={upDataForm.imgurl}
                                name="imgurl"
                                class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                type="text"
                                placeholder="Enter Image URL Here..."
                                id="url"
                            />
                        </div>
                        </div> 


                        {/* title */}
                        <div>
                    <label for="url" class="text-base font-medium text-gray-900">
                        {" "}
                        Image Title{" "}
                    </label>
                    <div class="mt-2">                           
                        <input
                            onChange={handleUpdateFormData}
                            value={upDataForm.title}
                            name="title"                           
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter Image URL Here..."
                            id="url"
                        />
                    </div>
                        </div>


                        {/* description */}

                        <div>
                    <label for="desc" class="text-base font-medium text-gray-900">
                        {" "}
                        Description{" "}
                    </label>
                    <div class="mt-2">
                        <textarea
       
                            onChange={handleUpdateFormData}
                            value={upDataForm.description}
                            name="description"
                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                            type="text"
                            placeholder="Enter Description here..."
                            id="desc"
                        />
                    </div>
                        </div>

                    </>
                ):
                (  
                    <img
                        src={`${import.meta.env.VITE_BASE_URL}${id}`}
                        alt="Laptop"
                        class="h-[200px] w-full rounded-t-md object-cover"
                    />
                )
            }
            <div class="p-4">

                {
                    (isEdit) ? 

                    (
                        <button onClick={submitUpdatedFormData}
                        type="button"
                        class="mt-4 w-full rounded-sm bg-green-400 px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-green-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                        Update Post
                    </button>
                    )
                    : 
                    (
                        <>
                        {/* title */}
                        <h1 class="inline-flex items-center text-lg font-semibold">
                        {title}  {" "}
                        </h1>

                        {/* description */}
                        <p class="mt-3 text-sm text-gray-600 mb-4">
                            {description.substring(0, 50)}....
                        </p>
                        </>
                    )
                }
 

                <Link to={`detail/${id}`}
                    type="button"
                    class="mt-8 w-full  rounded-sm bg-two px-2 py-1.5 text-sm font-semibold text-black shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Read More
                </Link>
                <button
                    onClick={() => {
                        setIsEdit(!isEdit)
                    }}
                    type="button"
                    class="mt-4 w-full rounded-sm bg-four px-2 py-1.5 text-sm font-semibold shadow-sm hover:bg-four-400/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    {
                        (isEdit) ? "Cancel Post" : "Edit Post"
                    }
                </button>
                <button onClick={deletePost}
                    type="button"
                    class="mt-4 w-full rounded-sm bg-four px-2 py-1.5 text-sm font-semibold text-black shadow-sm hover:bg-four/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Delete Post
                </button>
            </div>
        </div>


    )
}

export default Post;