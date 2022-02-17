import { NextComponentType } from "next";
import Image from "next/image";
import Link from "next/link";


const Navigation: NextComponentType = () => {
    return (
        <>
            <div>
                <Image src="/logo.svg" alt="space tourism logo" className="logo" width={30} height={30} />
            </div>
            <nav>
                <ul className="primary-navigation underline-indicators flex">
                    <li>
                        <Link href={'/'} passHref><a className="uppercase text-white letter-spacing-2"><span>00</span>Home</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                    </li>
                    <li>
                        <Link href={'/destination'} passHref><a className="uppercase text-white letter-spacing-2"><span>01</span>Destination</a></Link>
                    </li>
                    <li>
                        <Link href={'/crew'} passHref><a className="uppercase text-white letter-spacing-2"><span>02</span>Crew</a></Link> 
                    </li>
                    <li>
                        <Link href={'/technology'} passHref><a className="uppercase text-white letter-spacing-2"><span>03</span>Technology</a></Link>
                    </li>
                </ul>
        </nav>
        </>
    );
}

export default Navigation;