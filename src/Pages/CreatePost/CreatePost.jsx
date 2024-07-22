import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const CreatePost = () => {
    const [formData, setFormData] = useState({
        imgurl:"", title: "", description: ""
    })
    const navigator = useNavigate()

    function handleFormData (e) {
        const {name, value} = e.target;
        setFormData({...formData, [name]:value})
    }

    async function handleFormSubmit (e) {
        e.preventDefault();
        try {
            const response = await axios.post(`http://localhost:3131/api/v1/blog/post`, formData,                 {
                headers: {
                    'Content-Type': 'application/json',
                    // Authorization: 'Bearer your_token_here' // Add any other headers as needed
                }
            })
            setFormData({
                imgurl:"", title: "", description: ""
            })
            navigator("/")
        } catch (error) {
            console.log("error caught by handleForm Submit",error)
        }


    }


    return (
        <div>
        <section>
                <div class="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
                    <div class="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">

                        <form onSubmit={handleFormSubmit} action="#" method="POST" class="mt-8">
                            <div class="space-y-5">

                                <div>
                                    <label for="url" class="text-base font-medium text-gray-900">
                                        {" "}
                                        Image URL{" "}
                                    </label>
                                    <div class="mt-2">                           
                                        <input
                                            onChange={handleFormData}
                                            value={formData.imgurl}
                                            name="imgurl"
                                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none outline-four focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter Image URL Here..."
                                            id="url"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label for="title" class="text-base font-medium text-gray-900">
                                        {" "}
                                        Image Title{" "}
                                    </label>
                                    <div class="mt-2">
                                        <input
                                            onChange={handleFormData}
                                            value={formData.title}
                                            name="title"
                                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter your title here..."
                                            id="title"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label for="desc" class="text-base font-medium text-gray-900">
                                        {" "}
                                        Description{" "}
                                    </label>
                                    <div class="mt-2">
                                        <textarea
                                            onChange={handleFormData}
                                            value={formData.description}
                                            name="description"
                                            class="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                                            type="text"
                                            placeholder="Enter Description here..."
                                            id="desc"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        class="inline-flex w-full items-center justify-center rounded-md bg-four px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-four/80"
                                    >
                                        Create Post{" "}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            stroke-width="2"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            class="ml-2"
                                        >
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>

        </section>

    </div>
    )
};


export default CreatePost;