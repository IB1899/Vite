import { FC, useState, FormEvent } from "react";
import ImageGenerating from "../components/ImageGenerating";

const About: FC = () => {

    let [questions, setQuestions] = useState<{ role: string, content: string }[]>([])
    let [question, setQuestion] = useState<string>('')
    let [ai, setAi] = useState<boolean>(false)

    let ask = async (e: FormEvent<HTMLFormElement>) => {

        e.preventDefault()
        setQuestion("")

        //* Won't rerender the page
        questions.push({ role: "user", content: question });

        let response = await fetch("api/openai", {
            method: "post", headers: { "Content-type": "application/json" },
            body: JSON.stringify({ questions })
        })

        let message = await response.json();

        questions.push({ role: "assistant", content: message })
        setQuestions([...questions])
    }

    return (
        <div className="About">
            <div className={ai ? "container open" : "container"}>

                <div className="answer">
                    {questions && questions.map(answer => (
                        <div className="content" key={Math.floor(Math.random() * 100000)}>
                            {answer.role === "user" ? <p id="ask"> {answer.content} </p> : <p id="ans"> {answer.content} </p>}
                        </div>
                    ))}
                </div>

                <form onSubmit={ask}>

                    <input type="text" value={question} required placeholder="Your prompt"
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <button>send</button>
                </form>
            </div>

            <div className="Ai" onClick={() => setAi(!ai)}>
                <img src="./database/ai 2.png" alt="ai" />
            </div>

            <ImageGenerating />
        </div>
    );
}
export default About;
