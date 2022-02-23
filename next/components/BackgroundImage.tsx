import { NextComponentType } from "next";
import Image from "next/image";

type BgImg = {
    pageBgr: string;
}

const BackgroundImage: React.FC<BgImg> = ({ pageBgr }) => {
    
    return (
        
            <Image 
                src={`/${pageBgr}/background-${pageBgr}-desktop.jpg`}
                // width={375}
                // height={667}
                layout="fill"
                objectFit="cover" 
                objectPosition="bottom center"
                className='flex z-index-bgr'
            />
        )
}

export default BackgroundImage