import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { MouseEventHandler, SetStateAction } from "react";

type NavigationProps = {
    setPageBgr: React.Dispatch<React.SetStateAction<string>>;
}

const Navigation: React.FC<NavigationProps> = ({ setPageBgr }) => {
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>):void => {
        event.preventDefault();
        router.push(event.currentTarget.href);
        setPageBgr(event.currentTarget.title);
    }
    
    return (
        <>
            <div>
                <Image src="/logo.svg" alt="space tourism logo" className="logo" width={30} height={30} />
            </div>
            <button className="mobile-nav-toggle" aria-controls="primary-navigation" aria-expanded="false"> 
                <span className="sr-only">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                    <li>
                        <Link href={'/'} passHref><a className="uppercase text-white letter-spacing-2" title="home" onClick={handleClick}><span>00</span>Home</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                    </li>
                    <li>
                        <Link href={'/destination'} passHref><a className="uppercase text-white letter-spacing-2" title="destination" onClick={handleClick}><span>01</span>Destination</a></Link>
                    </li>
                    <li>
                        <Link href={'/crew'} passHref><a className="uppercase text-white letter-spacing-2" title="crew" onClick={handleClick}><span>02</span>Crew</a></Link> 
                    </li>
                    <li>
                        <Link href={'/technology'} passHref><a className="uppercase text-white letter-spacing-2" title="technology" onClick={handleClick}><span>03</span>Technology</a></Link>
                    </li>
                </ul>
        </nav>
        </>
    );
}

export default Navigation;