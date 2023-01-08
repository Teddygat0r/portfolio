import React from "react";
import {About, Projects, Resume} from './Cards'

export default function Body() {
    return (
        <div className="flex-auto overflow-y-scroll snap-y snap-mandatory hide-scrollbar" id="body">
            <section className="w-full h-full gradient snap-start" id="about">
                <About />
            </section>
            <section className="w-full h-full bg-blue-200 snap-start" id="projects">
                <Projects />
            </section>
            <section className="w-full h-full bg-green-200 snap-start" id="resumé">
                <Resume />
            </section>
        </div>
    );
}
