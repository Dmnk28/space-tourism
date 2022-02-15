import { NextComponentType } from "next";
import Link from "next/link";


const Navigation: NextComponentType = () => {
    return (
        <nav>
            <ul className="primary-navigation underline-indicators flex">
                <li>
                    <Link href={'/'} passHref><a><span>00</span>Home</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                </li>
                <li>
                    <Link href={'/'} passHref><a><span>01</span>Destination</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                </li>
                <li>
                    <Link href={'/'} passHref><a><span>02</span>Crew</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                </li>
                <li>
                    <Link href={'/'} passHref><a><span>03</span>Technology</a></Link> {/* Link allows not more than one Child, so I use an a-element in combination with passHref */}
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;