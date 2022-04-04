const setFirstTabIndicatorToAriaSelected = (selector: string) => {
    const firstTabElement = document.querySelector(selector);
    if (firstTabElement) firstTabElement.ariaSelected = "true"; 
}

export default setFirstTabIndicatorToAriaSelected;