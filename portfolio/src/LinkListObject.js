import React from "react";

export default function LinkListObject(props) {
    const { text, highlight } = props;

    const scroll = (e) => {
        e.preventDefault();
        const obj = document.getElementById(text.toLowerCase());
        obj.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <li className="mr-6 mb-3">
            <a
                href="#{text.toLowerCase()}"
                onClick={scroll}
                className={`font-mono text-center flex items-center justify-center transition ease-in delay-50 ${highlight ? 'text-gray-800':'text-gray-500 hover:text-gray-700'} hover:scale-105`}>
                <strong className="my-auto mr-1">{text}</strong>
                <strong className="text-3xl mb-[3px]">·</strong>
            </a>
        </li>
    );
}
