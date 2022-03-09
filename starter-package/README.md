# Frontend Mentor - Space tourism website
![Design preview for the Space tourism website coding challenge](./preview.jpg)

## Frontend Mentor?! What is this?
[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects. 


## The challenge

The challenge is to build out this multi-page space tourism website and get it looking as close to the design as possible.

Check the [Challenge-Description on Frontend-Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3) for more Details.

**This challange is a collaboration between Frontend Mentor, Scrimba, and Kevin Powell. If you'd like to see how Kevin would tackle the project, you can [follow along on Scrimba's free course](https://scrimba.com/learn/spacetravel).**

## My Stack
I used Next (Typescript) and Scss and deploy the project via Vercel. For the Scss-Part I followed Kevin Powells Scrimba Course to improve my understanding of CSS and to possibly learn some best practices from Kevin.

## Thoughts along the way
* Used a custom React-Hook to detect screensize for Background Image
    * Mainly for trying out how to render different attributes/components depending on screensize. 
    * Could maybe have been solved easier by using CSS-modules per page, defining the BackgroundImage. But the other way was more exciting to practice
* Backdrop-Filter workaround for Mozilla Firefox with transparent background and @support () {} for Chrome and others which are supporting backdrop-filter

## To Solve: 
* Underline Indicator Active Design works in Chromium but not in Firefox. Why?