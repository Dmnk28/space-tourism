import React, { useState } from "react";

import { NextPage } from "next";
import Image from "next/image";

import { CONTENT } from '../data/content';

const Crew: NextPage = () => {
    const crewMembers = [...CONTENT.crew]
    const [currentMember, setCurrentMember] = useState(crewMembers[0])
    
    const handleCrewMembers = (index: number) => (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
        event.preventDefault();
        const allDotBtns: NodeListOf<Element> = document.querySelectorAll('.dot-btn');
        allDotBtns?.forEach(element => (element.ariaSelected = "false"))
        setCurrentMember(crewMembers[index]);
        event.currentTarget.ariaSelected = "true";
    }

    return (
        <main className="grid-container grid-container--crew z-1 flow">
            <h1 className="numbered-title"><span aria-hidden="true">02</span> Meet your crew</h1>
            
            <article className="crew-details">
                <h2 className="fs-600 ff-serif uppercase text-light">{currentMember.role}</h2>
                <p className="fs-700 ff-serif uppercase">{currentMember.name}</p>
                <p className="destination-content">
                    {currentMember.bio}
                </p>
            </article>

            <div className="crew-image" >
                <Image src={currentMember.images.png} alt={currentMember.name} width={514} height={700} layout="intrinsic"></Image>
            </div>

            <div className="dot-indicators flex">
                {
                    crewMembers.map((member, index)=> {
                        if (index === 0) return (<button className="dot-btn" key={member.name} onClick={handleCrewMembers(index)} aria-selected="true"><span className="sr-only">{member.name}</span></button>) 
                        return (
                            <button className="dot-btn" key={member.name} onClick={handleCrewMembers(index)} aria-selected="false"><span className="sr-only">{member.name}</span></button>
                        )
                    })
                }
            </div>
        </main>
    );
}

export default Crew;