import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import ImageGenerating from "../components/ImageGenerating";
const About = () => {
    let [questions, setQuestions] = useState([]);
    let [question, setQuestion] = useState('');
    let [ai, setAi] = useState(false);
    let ask = async (e) => {
        e.preventDefault();
        setQuestion("");
        //* Won't rerender the page
        questions.push({ role: "user", content: question });
        let response = await fetch("api/openai", {
            method: "post", headers: { "Content-type": "application/json" },
            body: JSON.stringify({ questions })
        });
        let message = await response.json();
        questions.push({ role: "assistant", content: message });
        setQuestions([...questions]);
    };
    return (_jsxs("div", { className: "About", children: [_jsxs("div", { className: ai ? "container open" : "container", children: [_jsx("div", { className: "answer", children: questions && questions.map(answer => (_jsx("div", { className: "content", children: answer.role === "user" ? _jsxs("p", { id: "ask", children: [" ", answer.content, " "] }) : _jsxs("p", { id: "ans", children: [" ", answer.content, " "] }) }, Math.floor(Math.random() * 100000)))) }), _jsxs("form", { onSubmit: ask, children: [_jsx("input", { type: "text", value: question, required: true, placeholder: "Your prompt", onChange: (e) => setQuestion(e.target.value) }), _jsx("button", { children: "send" })] })] }), _jsx("div", { className: "Ai", onClick: () => setAi(!ai), children: _jsx("img", { src: "./database/ai 2.png", alt: "ai" }) }), _jsx(ImageGenerating, {})] }));
};
export default About;
