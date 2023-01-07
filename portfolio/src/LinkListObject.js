import React, {useEffect} from "react";

export default function LinkListObject(props) {
    const {text} = props
    
    const scroll = (e) => {
        e.preventDefault()

        window.history.pushState("Hi", "LOL", `/#${text.toLowerCase()}`);
        const obj = document.getElementById(text.toLowerCase())
        obj.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <li class="mr-6 mb-3">
            <a href="#{text.toLowerCase()}" onClick={scroll}>
                { text }
            </a>
        </li>
    );
}
