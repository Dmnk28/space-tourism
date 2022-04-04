const switchActiveLookingTabIndicators = (elementClass: String, target: HTMLButtonElement|HTMLAnchorElement) => {
    /* get rid of decoration of the previous active HTMLElement(s) */
    const allTabIndicators: NodeListOf<Element> = document.querySelectorAll(`${elementClass}`);
    allTabIndicators?.forEach(element => (element.ariaSelected = "false"));
    /* Set aria-Selected true for Screen-Readers and underline-styling(--> CSS) */
    target.ariaSelected = "true";
}

export default switchActiveLookingTabIndicators;