


const UploadImage = () => {
    return (
        <form className="mt-8" action="/upload" method="POST" enctype="multipart/form-data">
            <input type="file" name="profileImage" />
            <button className="bg-four text-white px-4 py-2 rounded-md" type="submit">Upload</button>
        </form>
    )
}

export default UploadImage;