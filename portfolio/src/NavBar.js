import React from "react";
import LinkListObject from "./LinkListObject"

export default function NavBar() {
    return (
        <nav class="flex pl-5 bg-white border border-gray-200 justify-center flex-none w-48">
            <div class="h-full container flex flex-col flex-wrap justify-center m-auto">
                <div class="fixed top-0 left-0">
                    <h1 class="ml-5">Joshua Zhang</h1>
                </div>
                <ul class="flex flex-col">
                    <LinkListObject text="About"/>
                    <LinkListObject text="Projects"/>
                    <LinkListObject text="Resume"/>
                </ul>
            </div>
        </nav>
    );
}
