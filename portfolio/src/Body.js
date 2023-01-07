import React from "react";
import {About, Projects, Resume} from './Cards'

export default function Body() {
    return (
        <div class="flex-auto overflow-y-scroll snap snap-y snap-mandatory hide-scrollbar">
            <section class="w-full h-full gradient snap-start" id="about">
                <About />
            </section>
            <section class="w-full h-full bg-blue-200 snap-start" id="projects">
                <Projects />
            </section>
            <section class="w-full h-full bg-green-200 snap-start" id="resume">
                <Resume />
            </section>
        </div>
    );
}
