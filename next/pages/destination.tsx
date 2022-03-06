import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { CONTENT } from "../data/content";

type Destinations = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}[]

const Destination: NextPage = () => {
    const [showDestination, setShowDestination] = useState(0);
    const destinations: Destinations = [...CONTENT.destinations]; 
    
    const handleDestination = (index:number) => (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault();
        /* get rid of old underline-decoration in Menu */
        const allTabItems: NodeListOf<Element> = document.querySelectorAll('.tab');
        allTabItems?.forEach(element => (element.ariaSelected = "false"));
        /* Trigger Content-Change*/
        setShowDestination(index);
        /* Set aria-Selected true for Screen-Readers and underline-styling(--> CSS) */
        event.currentTarget.ariaSelected = "true";
    }

    return (
        <main className='grid-container grid-container--destination z-1'>
            <div>
                <h1 className="numbered-title"><span aria-hidden="true">01</span> Pick your destination</h1>
                <div className="destination-image" >
                    <Image src={destinations[showDestination].images.webp} alt={`the ${destinations[showDestination].name}`} width={445} height={445} layout="intrinsic"></Image>
                </div>
            </div>
            <div>
                <div className="tab-list underline-indicators flex ">
                    {destinations.map((element, index) => {
                        return (
                            <a key={element.name} className="tab uppercase ff-sans-condensed text-accent letter-spacing-2" onClick={handleDestination(index)}>{element.name}</a>
                        )
                    })}
                </div>
                <article>
                    <h3 className="fs-900 ff-serif uppercase">{destinations[showDestination].name}</h3>
                    <p className="text-light">{destinations[showDestination].description}</p>
                    <div className="separation-line"></div>
                    <div className="destination-data-grid">
                        <div>
                            <p className="uppercase text-light letter-spacing-2">Avg. distance</p>
                            <p className="description-text">{destinations[showDestination].distance}</p>
                        </div>
                        <div>
                            <p className="uppercase text-light letter-spacing-2">est. travel time</p>
                            <p className="description-text">{destinations[showDestination].travel}</p>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}

export default Destination;