import React from "react";
import LinkListObject from "./LinkListObject"

export default function NavBar() {
    return (
        <nav class="flex px-2 bg-white border border-gray-200 justify-center flex-none">
            <div class="h-full container flex flex-col flex-wrap items-center justify-center m-auto">
                <h1 class="ml-5">Joshua Zhang</h1>
                <ul class="flex flex-col">
                    <LinkListObject text="About"/>
                    <LinkListObject text="Projects"/>
                    <LinkListObject text="Resume"/>
                </ul>
            </div>
        </nav>
    );
}
