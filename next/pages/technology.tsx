import { useState } from "react";
import { NextPage } from "next";
import Image from "next/image";

import useWindowSize from "../hooks/useWindowSize";
import switchActiveLookingTabIndicators from "../utils/switchActiveLookingTabIndicators";

import { CONTENT } from "../data/content";

const Technology: NextPage = () => {
    const tech = [...CONTENT.technology]
    const [currentTech, setCurrentTech] = useState(tech[0]);
    
    let windowWidth  = useWindowSize()?.width;
    let mobileDevice = windowWidth < 1026;

    const changeSelectedTech = (index: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        switchActiveLookingTabIndicators('.numbered-dot-btn', event.currentTarget);
        setCurrentTech(tech[index]);
    }

    const selectImage = () => {
        if (mobileDevice) return (
            <Image src={currentTech.images.landscape} width={768} height={310} layout="intrinsic"/>
        )
        return (
            <Image src={currentTech.images.portrait} width={515} height={527} layout="intrinsic"/>
        );
    }

    return (
        <main className="grid-container grid-container--tech z-1 flow">
            <h1 className="numbered-title"><span aria-hidden="true">03</span>Space Launch 101</h1>
            <div className="tech-tabs flow">
                <div className="numbered-dots flex">
                    {
                        tech.map((techElement, index) => {
                            return (
                                <button key={techElement.name} onClick={changeSelectedTech(index)} className="numbered-dot-btn">
                                    {index + 1}
                                    <span className="sr-only">{techElement.name}</span>
                                </button>
                            )
                        })
                    }
                </div>
                <article className="tech-content flow">
                    <header className="flow flow--space-small">
                        <p className="uppercase">The Terminology...</p>
                        <h2 className="fs-700 ff-serif uppercase">{currentTech.name}</h2>
                    </header>
                    <p>{currentTech.description}</p>
                </article>
            </div>
            <div className="tech-image">
                {selectImage()}
            </div>
        </main>
    );
}

export default Technology;