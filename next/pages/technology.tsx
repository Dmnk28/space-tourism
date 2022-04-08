import { useState, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";

import useWindowSize from "../hooks/useWindowSize";
import setFirstTabIndicatorToAriaSelected from "../utils/setFirstTabIndicatorToAriaSelected";
import switchActiveLookingTabIndicators from "../utils/switchActiveLookingTabIndicators";

import type { PageBgrProp } from "../utils/types";

import { CONTENT } from "../data/content";

const Technology: NextPage<PageBgrProp> = ({ setPageBgr }) => {
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
            <Image src={currentTech.images.landscape} alt={currentTech.name} width={768} height={310} layout="intrinsic"/>
        )
        return (
            <Image src={currentTech.images.portrait} alt={currentTech.name} width={515} height={527} layout="intrinsic"/>
        );
    }

    useEffect(() => {
        setPageBgr('technology');
        setFirstTabIndicatorToAriaSelected('.numbered-dot-btn');
    }, []);

    return (
        <main className="grid-container grid-container--tech z-1">
            <h1 className="numbered-title"><span aria-hidden="true">03</span>Space Launch 101</h1>
            <div className="tech-tabs flow">
                <div className="numbered-dots flex">
                    {
                        tech.map((techElement, index) => {
                            return (
                                <button key={techElement.name} onClick={changeSelectedTech(index)} className="numbered-dot-btn" aria-selected="false">
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