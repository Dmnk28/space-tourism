/* Types for interactivity and Componets */
export type PageBgrProp = {
    setPageBgr: React.Dispatch<React.SetStateAction<string>>;
}

export type MenuOpen = {
    isMenuOpen: boolean;
}

/* Content Types */

export type Destinations = {
    name: string;
    images: {
        png: string;
        webp: string;
    };
    description: string;
    distance: string;
    travel: string;
}[];