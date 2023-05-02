import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const OneImage = () => {
    let { id } = useParams();
    let [MainImage, SetMainImage] = useState();
    useEffect(() => {
        let f = async () => {
            let response = await fetch(`/api/MongodbFirebase/${id}`);
            let data = await response.json();
            SetMainImage(data);
        };
        f();
    }, []);
    let deleteImage = async () => {
        let response = await fetch(`/api/MongodbFirebase/${id}`, { method: "Delete" });
        let message = await response.json();
        window.history.back();
    };
    let [title, setTitle] = useState('');
    let [image, setImage] = useState('');
    let updateImage = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append("image", image);
        formData.append("title", title);
        let response = await fetch(`/api/MongodbFirebase/${id}`, {
            method: "Put",
            body: formData
        });
        window.history.back();
    };
    return (_jsxs("div", { className: "OneImage", children: [_jsxs("h3", { children: [" Hello This is the page of ", _jsx("big", { children: id }), " image "] }), MainImage && _jsx("img", { src: MainImage.downloadURL, alt: "no image" }), _jsx("button", { className: "delete", onClick: deleteImage, children: " delete " }), _jsxs("form", { onSubmit: updateImage, encType: "multipart/form-data", children: [_jsx("input", { type: "file", placeholder: "The new image", required: true, name: "image", onChange: (e) => setImage(e.target.files[0]) }), _jsx("input", { type: "text", required: true, value: title, onChange: (e) => setTitle(e.target.value) }), _jsx("button", { children: "update" })] })] }));
};
export default OneImage;
