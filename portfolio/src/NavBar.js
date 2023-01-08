import React, {useState, useEffect} from "react";
import LinkListObject from "./LinkListObject"

export default function NavBar() {
    const [height, setHeight] = useState(0)

    const handleScroll = (e) => {
        const element = document.getElementById('body')
        setHeight((element.scrollTop + 3) / element.offsetHeight)
    }

    useEffect(() => {
        const element = document.getElementById('body')
        element.addEventListener('scroll', handleScroll)
        return () => {
            element.removeEventListener('scroll', handleScroll);
        };
    })

    return (
        <nav className="flex pl-5 bg-white border border-gray-200 justify-center flex-none w-48">
            <div className="h-full container flex flex-col flex-wrap justify-center m-auto">
                <div className="fixed top-0 left-0">
                    <h1 className="ml-5">Joshua Zhang</h1>
                </div>
                <ul className="flex flex-col">
                    <LinkListObject text="About" highlight = {height < 1}/>
                    <LinkListObject text="Projects" highlight = {height < 2 && height >= 1}/>
                    <LinkListObject text="Resumé" highlight = {height > 2}/>
                </ul>
            </div>
        </nav>
    );
}
