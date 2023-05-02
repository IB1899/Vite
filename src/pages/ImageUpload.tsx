import { FC, FormEvent, useState, ChangeEvent } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";

export interface image {
    _id: string,
    downloadURL: string,
    filename: string,
    mimetype: string,
    title: string,
    pages?: number
}

const ImageUpload: FC = () => {

    let images = useLoaderData() as image[];

    let navigate = useNavigate()

    let [image, setImage] = useState<File | string>('')
    let [title, setTitle] = useState<string>("")
    let [pages, setPages] = useState<any>(15)
    let [message, setMessage] = useState<any>('')

    //! Uploading the images to the backend
    let uploadImage = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()

        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("pages", pages);

        let response = await fetch("api/MongoFirebase", {
            method: "Post", body: formData
        })

        let message = await response.json()
        console.log(message);
        setMessage(message)

        window.location.reload()
        // navigate("/")
    }
    

    return (
        <div className="ImageUpload">

            {/* Uploading images to the backend */}
            <form encType="multipart/form-data" onSubmit={uploadImage} >

                <input type="file" name="image" className="file" required id="image"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files![0])}
                />

                <input type="text" name="title" value={title} required
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
                />

                <button>submit</button>
                {message && <h2> {message.message} </h2>}
            </form>

            {/* Fetching the images */}
            <div className="images">

                {images && images.map((img) => (

                    <div className="img" key={img._id} onClick={() => navigate(`/uploadImages/${img._id}`)}>
                        <h3> {img.title} </h3>
                        <img src={img.downloadURL} alt={img.filename} />
                    </div>

                ))}
            </div>
        </div>
    )
}
export default ImageUpload;

//* Loader => Fetching images from the backend(Mongodb & Firebase)
export let fetchImages = async () => {

    try {
        let response = await fetch("api/MongoFirebase")
        let data = await response.json()

        return data
    }
    catch (err) {
        console.log(err);
        return null
    }
}