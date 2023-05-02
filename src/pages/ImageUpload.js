import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
const ImageUpload = () => {
    let images = useLoaderData();
    let navigate = useNavigate();
    let [image, setImage] = useState('');
    let [title, setTitle] = useState("");
    let [pages, setPages] = useState(15);
    let [message, setMessage] = useState('');
    //! Uploading the images to the backend
    let uploadImage = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        formData.append("pages", pages);
        let response = await fetch("api/MongoFirebase", {
            method: "Post", body: formData
        });
        let message = await response.json();
        console.log(message);
        setMessage(message);
        window.location.reload();
        // navigate("/")
    };
    return (_jsxs("div", { className: "ImageUpload", children: [_jsxs("form", { encType: "multipart/form-data", onSubmit: uploadImage, children: [_jsx("input", { type: "file", name: "image", className: "file", required: true, id: "image", onChange: (e) => setImage(e.target.files[0]) }), _jsx("input", { type: "text", name: "title", value: title, required: true, onChange: (e) => setTitle(e.target.value) }), _jsx("button", { children: "submit" }), message && _jsxs("h2", { children: [" ", message.message, " "] })] }), _jsx("div", { className: "images", children: images && images.map((img) => (_jsxs("div", { className: "img", onClick: () => navigate(`/uploadImages/${img._id}`), children: [_jsxs("h3", { children: [" ", img.title, " "] }), _jsx("img", { src: img.downloadURL, alt: img.filename })] }, img._id))) })] }));
};
export default ImageUpload;
//* Loader => Fetching images from the backend(Mongodb & Firebase)
export let fetchImages = async () => {
    try {
        let response = await fetch("api/MongoFirebase");
        let data = await response.json();
        return data;
    }
    catch (err) {
        console.log(err);
        return null;
    }
};
