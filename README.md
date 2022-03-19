![Design preview for the Space tourism website coding challenge](./preview.jpg)

# Frontend Mentor - Space Tourism Website
This is a solution to the space tourism challenge on [Frontend Mentor](https://www.frontendmentor.io)


## Frontend Mentor?! What is this?
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 


## The Challenge
The challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.

Check the [Challenge-Description on Frontend-Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) for more Details.

**This challange is a collaboration between Frontend Mentor, Scrimba, and Kevin Powell. If you'd like to see how Kevin would tackle the project, you can [follow along on Scrimba's free course](https://scrimba.com/learn/spacetravel).**


## My Stack and Approach
I used Next.js (Typescript) and Scss and deploy the project via Vercel. For the styling I followed Kevin Powells Scrimba course, aiming to improve my understanding of CSS and to possibly learn some best practices from Kevin. 

So, while the styling is made by him entirely (in CSS) and only rewritten by me in SCSS, the rest is designed and coded by myself.

## Learning Goals
* learn TypeScript
* get more familiar with Next.js
    * learn how TypeScipt and Next.js work together
    * deepen knowledge of JSX
* deepen knowledge of CSS and HTML

## Learned Stuff
### TypeScript
* There are tonns of HTMLElements(!)
* .firstElementChild is what to be expected in JS  with .firstElement
* interfaces rock
* I have to learn more about OOP and TypeScript
* CSS.modules provide better performance --> have to learn it

### Next.js / React
* custom Hooks for detecting Screensize via Screen width
    * could be used for rendering different components/elements/stuff in React
* adressing Images in Public via CSS works simply by ignoring root and public in the path. For example "url('/shared/icon-hamburger.svg')".

### CSS / SCSS
* grid-template-areas are great
    * combine it with grid-area and let magic happen
* use variables more often to make minor adjustments in for e.g. spacing class by class 
* use ' > * '-Selectors mor often to select all children or specify it by using element/class-names instead of ' * '
* aspect-ratio is usefull to only set one value for heigth or width and porviding better maintainance and conveniance (no need for manual calculations) this way
* using min(), max() and clamp() more often

### HTML
* simplyfy the HTML-Structure (--> better readability & sometimes even SEO) by using CSS-grid templates for design components and/or pages (grid-template-areas).

## Thoughts Along the Way
* Used a custom React-Hook to detect screensize for Background Image
    * Mainly for trying out how to render different attributes/components depending on screensize. 
    * Could maybe have been solved easier by using CSS-modules per page, defining the BackgroundImage. But the other way was more exciting to practice
* Backdrop-Filter workaround for Mozilla Firefox with transparent background and @support () {} for Chrome and others which are supporting backdrop-filter

## To Solve: 
* Underline Indicator Active Design works in Chromium but not in Firefox. Why?

## To Do:
* CSS Modules for the Components/Pages