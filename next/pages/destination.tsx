import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Image from "next/image";

import switchActiveLookingTabIndicators from "../utils/switchActiveLookingTabIndicators";
import setFirstTabIndicatorToAriaSelected from "../utils/setFirstTabIndicatorToAriaSelected";

import { CONTENT } from "../data/content";

import type { Destinations, PageBgrProp } from "../utils/types";

const Destination: NextPage<PageBgrProp> = ({ setPageBgr }) => {
    const [showDestination, setShowDestination] = useState(0);
    const destinations: Destinations = [...CONTENT.destinations]; 
    
    /**
     * Manages the showDestination-State for switching content and calls switchActiveLookingTabIndicators to optically indicate content-switch.
     * @param index Index belonging to the array-element of the corresponding clicked or entered html-element
     */
    const manageTabNavigation = (index:number, target: HTMLAnchorElement): void => {
        switchActiveLookingTabIndicators('.tab', target)
        /* Trigger Content-Change*/
        setShowDestination(index);
    }

    /**
     * Handles Click-Events in the Destination-Tab.
     * @param index Index belonging to the array-element of the corresponding clicked or entered html-element
     * @param event onClick-event, transporting the clicked target 
     */
    const handleDestinationClick = (index:number) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>): void => {
        event.preventDefault();
        manageTabNavigation(index, event.currentTarget);
    }

    /**
     * Handles KeyDown-Events in the Destination-Tab.
     * In particullar it acts as soon as the Enter-Key is fired 
     * @param index Index belonging to the array-element of the corresponding clicked or entered html-element
     * @param event KeyDown-event, transporting the target of the interaction 
     */
    const handleDestinationKeyDown = (index:number) => (event: React.KeyboardEvent<HTMLAnchorElement>): void => {
        // Didn't use event.preventDefault() here, because this would destroy the tabulator-navigation 
        if (event.key === 'Enter') {
            manageTabNavigation(index, event.currentTarget)
        }
    }

    useEffect(() => {
        setPageBgr('destination');
        setFirstTabIndicatorToAriaSelected('.tab');
    }, []);

    return (
        <main className='grid-container grid-container--destination z-1 flow'>            
            <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
            
            <div className="destination-image" >
                <Image src={destinations[showDestination].images.webp} alt={`the ${destinations[showDestination].name}`} width={445} height={445} layout="intrinsic"></Image>
            </div>
            
            <div id="destination-tabs" className="tab-list underline-indicators flex">
                {
                    destinations.map((element, index) => {
                        return (
                            <a key={element.name} className="tab uppercase ff-sans-condensed text-accent letter-spacing-2" aria-selected="false" onClick={handleDestinationClick(index)} tabIndex={0} onKeyDown={handleDestinationKeyDown(index)}>
                                {element.name}
                            </a>
                        )
                    })
                }
            </div>

            <article className="destination-content flow">
                <h2 className="fs-800 ff-serif uppercase">{destinations[showDestination].name}</h2>
                <p>{destinations[showDestination].description}</p>
                <div className="destination-meta flex">
                    <div>
                        <h3 className="uppercase text-light fs-200">Avg. distance</h3>
                        <p className="uppercase ff-serif">{destinations[showDestination].distance}</p>
                    </div>
                    <div>
                        <h3 className="uppercase text-light fs-200">est. travel time</h3>
                        <p className="uppercase ff-serif">{destinations[showDestination].travel}</p>
                    </div>
                </div>
            </article>
        </main>
    );
}

export default Destination;