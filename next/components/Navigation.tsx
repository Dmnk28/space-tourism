import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import switchActiveLookingTabIndicators from "../utils/switchActiveLookingTabIndicators";

import type { MenuOpen } from "../utils/types";

const Navigation: React.FC = () => {
    const router = useRouter();
    const [burgerMenuOpen, setBurgerMenuOpen] = useState<MenuOpen>({
        isMenuOpen: false,
    });

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>):void => {
        event.preventDefault();
        /* get rid of old underline-decoration in Menu */
        switchActiveLookingTabIndicators('.p-nav-link', event.currentTarget)
        /* BackgroundImageSetting & Routing */
        // setPageBgr(event.currentTarget.title);        
        router.push(event.currentTarget.href);
    }
    
    const handleBurgerMenu = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>):void => {
        event.preventDefault();
        const nav:HTMLElement|null  =  document.getElementById('primary-navigation');

        if (!burgerMenuOpen.isMenuOpen) {
            nav?.classList.add('mobile-active');
        } else {
            nav?.classList.remove('mobile-active');
        }
        
        setBurgerMenuOpen(prevMenuOpen => ({ 
            isMenuOpen: !prevMenuOpen.isMenuOpen,
        }));
    }

    return (
        <>
            <div className="logo">
                <Image src="/logo.svg" alt="space tourism" width={30} height={30} layout="responsive" />
            </div>
            <button className="mobile-nav-toggle" onClick={handleBurgerMenu} aria-controls="primary-navigation" aria-expanded={burgerMenuOpen.isMenuOpen}> 
                <span className="sr-only">Menu</span>
            </button>
            <nav>
                <ul id="primary-navigation" className="primary-navigation underline-indicators flex">
                    <li>
                        <Link href={'/'} passHref><a className="p-nav-link uppercase text-white letter-spacing-2" title="home" onClick={handleClick}><span aria-hidden="true">00</span>Home</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                    </li>
                    <li>
                        <Link href={'/destination'} passHref><a className="p-nav-link uppercase text-white letter-spacing-2" title="destination" onClick={handleClick}><span aria-hidden="true">01</span>Destination</a></Link>
                    </li>
                    <li>
                        <Link href={'/crew'} passHref><a className="p-nav-link uppercase text-white letter-spacing-2" title="crew" onClick={handleClick}><span aria-hidden="true">02</span>Crew</a></Link> 
                    </li>
                    <li>
                        <Link href={'/technology'} passHref><a className="p-nav-link uppercase text-white letter-spacing-2" title="technology" onClick={handleClick}><span aria-hidden="true">03</span>Technology</a></Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Navigation;