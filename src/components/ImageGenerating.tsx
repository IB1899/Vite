import { FC, FormEvent, useState } from "react";

const ImageGenerating: FC = () => {

    let [loading, setLoading] = useState<boolean>(false)

    let [prompt, setPrompt] = useState<string>("")
    let [size, setSize] = useState<string>("")
    let [AiImage, setAiImage] = useState<string>("none")

    let generate = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoading(true)

        let response = await fetch('api/generatingImage', {
            method: "Post", headers: { "Content-type": "Application/json" },
            body: JSON.stringify({ prompt, size })
        })

        let data = await response.json()
        setAiImage(data.imageUrl)
        setPrompt("")
        setLoading(false)
    }

    return (
        <div className="AiImage">
            <form className="ImageGenerating" onSubmit={generate}>
                <label htmlFor="prompt">Prompt:</label>
                <input type="text" name="prompt" value={prompt} required onChange={(e) => { setPrompt(e.target.value) }} />

                <label htmlFor="size">Image Size:</label>
                <select id="size" name="size" value={size} required onChange={(e) => { setSize(e.target.value) }}>
                    <option value="small">small</option>
                    <option value="medium">medium</option>
                    <option value="big">big</option>
                </select>

                <button>Generate</button>

                {loading ? <h1>loading...</h1> : null}

            </form>
            {AiImage !== "none" ? <img src={AiImage} alt="Ai image" /> : null}
        </div>
    );
}
export default ImageGenerating;