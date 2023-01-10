import React from "react";
import {About, Projects, Resume} from './Cards'

export default function Body() {
    return (
        <div className="flex-auto overflow-y-scroll snap-y snap-mandatory hide-scrollbar" id="body">
            <section className="w-full h-full anam-gradient snap-start" id="about">
                <About />
            </section>
            <section className="w-full h-full cinnamint-gradient snap-start" id="projects">
                <Projects />
            </section>
            <section className="w-full h-full piggy-gradient snap-start" id="resumé">
                <Resume />
            </section>
        </div>
    );
}
