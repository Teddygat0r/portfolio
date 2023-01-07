import React from "react";

export default function Body() {
    return (
        <div class="flex-auto overflow-y-scroll snap snap-y snap-mandatory hide-scrollbar">
            <section class="w-full h-full gradient snap-start">Section 1</section>
            <section class="w-full h-full bg-blue-200 snap-start">Section 2</section>
            <section class="w-full h-full bg-green-200 snap-start">Section 3</section>
        </div>
    );
}
