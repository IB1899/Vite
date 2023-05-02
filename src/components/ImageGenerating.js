import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ImageGenerating = () => {
    let [loading, setLoading] = useState(false);
    let [prompt, setPrompt] = useState("");
    let [size, setSize] = useState("");
    let [AiImage, setAiImage] = useState("none");
    let generate = async (e) => {
        e.preventDefault();
        setLoading(true);
        let response = await fetch('api/generatingImage', {
            method: "Post", headers: { "Content-type": "Application/json" },
            body: JSON.stringify({ prompt, size })
        });
        let data = await response.json();
        setAiImage(data.imageUrl);
        setPrompt("");
        setLoading(false);
    };
    return (_jsxs("div", { className: "AiImage", children: [_jsxs("form", { className: "ImageGenerating", onSubmit: generate, children: [_jsx("label", { htmlFor: "prompt", children: "Prompt:" }), _jsx("input", { type: "text", name: "prompt", value: prompt, required: true, onChange: (e) => { setPrompt(e.target.value); } }), _jsx("label", { htmlFor: "size", children: "Image Size:" }), _jsxs("select", { id: "size", name: "size", value: size, required: true, onChange: (e) => { setSize(e.target.value); }, children: [_jsx("option", { value: "small", children: "small" }), _jsx("option", { value: "medium", children: "medium" }), _jsx("option", { value: "big", children: "big" })] }), _jsx("button", { children: "Generate" }), loading ? _jsx("h1", { children: "loading..." }) : null] }), AiImage !== "none" ? _jsx("img", { src: AiImage, alt: "Ai image" }) : null] }));
};
export default ImageGenerating;
