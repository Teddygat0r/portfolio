import React from "react";

export default function LinkListObject(props) {
    const {text} = props
    
    return (
        <li class="mr-6">
            <a href="#">
                { text }
            </a>
        </li>
    );
}
