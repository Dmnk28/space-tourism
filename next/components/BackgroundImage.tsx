import { NextComponentType } from "next";
import Image from "next/image";
import { ReactNode } from "react";

type BgImg = {
    pageBgr: string;
}

const BackgroundImage: React.FC<BgImg> = ({pageBgr}) => {
    
    return (
        <Image 
            src={`/${pageBgr}/background-${pageBgr}-mobile.jpg`}
            layout="fill"
            objectFit="cover" 
            objectPosition="bottom center"
            className='z-index-bgr'/>
        )
}

export default BackgroundImage