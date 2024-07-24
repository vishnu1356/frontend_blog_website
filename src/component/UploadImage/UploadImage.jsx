




import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UploadForm = () => {
    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState(null);

    const handleImageChange = (e) => {
        console.log("target files:", e.target.files)
        setProfileImage(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        console.log("formData is", formData);
        formData.append('username', username);
        formData.append('profileImage', profileImage);

        try {
            const response = await axios.post('http://localhost:3131/api/v1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response.data);
            toast.success('Image uploaded successfully!');
            // Optionally, handle further logic after successful upload
        } catch (error) {
            console.error('Error uploading image:', error);
            toast.error('Error uploading image. Please try again later.');
        }
    };

    return (
        <div>
            <h2>Upload Image Form</h2>
            <form onSubmit={handleSubmit} method="POST" enctype="multipart/form-data">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                /><br/><br/>
                
                <label htmlFor="profileImage">Choose Image:</label>
                <input
                    type="file"
                    id="profileImage"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                /><br/><br/>

                <button type="submit">Upload Image</button>
            </form>
        </div>
    );
};

export default UploadForm;
