import Image from "next/image";
import useWindowSize from "../hooks/useWindowSize";

type BgImg = {
    pageBgr: string;
}

const BackgroundImage: React.FC<BgImg> = ({ pageBgr }) => {
    let windowWidth = useWindowSize()?.width;
    let device      = windowWidth < 500 ? "mobile" : windowWidth < 1026 ? "tablet" : "desktop";
    
    return (        
        <Image 
            src={`/${pageBgr}/background-${pageBgr}-${device}.jpg`}
            layout="fill"
            objectFit="cover" 
            objectPosition="bottom center"
            className='flex z-index-bgr'
        />
    )
}

export default BackgroundImage;