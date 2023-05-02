import { ChangeEvent, FC, FormEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { image } from "./ImageUpload";

const OneImage: FC = () => {

    let { id } = useParams()
    let [MainImage, SetMainImage] = useState<image>()

    useEffect(() => {
        let f = async () => {

            let response = await fetch(`/api/MongodbFirebase/${id}`)
            let data = await response.json()
            SetMainImage(data)
        }
        f()
    }, [])

    let deleteImage = async () => {
        let response = await fetch(`/api/MongodbFirebase/${id}`, { method: "Delete" })
        let message = await response.json();
        window.history.back()
    }

    let [title, setTitle] = useState<string>('');
    let [image, setImage] = useState<File | string>('');

    let updateImage = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        let formData = new FormData()
        formData.append("image", image!)
        formData.append("title", title)

        let response = await fetch(`/api/MongodbFirebase/${id}`, {
            method: "Put",
            body: formData
        })
        window.history.back()
    }

    return (
        <div className="OneImage">
            <h3> Hello This is the page of <big>{id}</big> image </h3>

            {MainImage && <img src={MainImage.downloadURL!} alt="no image" />}

            <button className="delete" onClick={deleteImage}  > delete </button>

            <form onSubmit={updateImage} encType="multipart/form-data">

                <input type="file" placeholder="The new image" required name="image"
                    onChange={(e: ChangeEvent<HTMLInputElement>) => setImage(e.target.files![0])}
                />

                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />
                <button>update</button>
            </form>
        </div>
    );
}
export default OneImage;
