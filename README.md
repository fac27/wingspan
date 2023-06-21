# wingspan

A Next.js application for collecting birds
inspiration came from the boardgame [Wingspan](https://stonemaiergames.com/games/wingspan/)

# Installation
1. Clone the repo
```
git clone https://github.com/fac27/wingspan
```
2. cd into the repo
```
cd wingspan
```
3. install npm packages
```
npm install
```
5.
```
node database/seed.js
```
5.
```
npm run dev
```
6. navigate to http://localhost:3000/ in the browser

   
## About

This is for the week 5 project of the FAC software developer apprenticeship. A Nextjs full-stack application. Ours is inspired by the game [wingspan](https://stonemaiergames.com/games/wingspan/).

### User Stories 
- As a user I want to land on a page with images of birds (name, image) so that I can get an idea of what birds are on offer
- As a user I want to be able to filter the original view of the birds so I can narrow my decision making (filter by habitat)
- As a user I want to be able to select a bird to view more data so that I can get more information about the birds
- As a use I want to be able to select a quantity of birds so that I can add them to my birdcage

## Design 

Wireframes were done using figma, and you can see them [HERE](https://www.figma.com/file/iiODlCs5mHMrSqUgyhGMW3/Homepage?type=design).

<img width="300" alt="Screenshot 2023-06-21 at 14 14 31" src="https://github.com/fac27/wingspan/assets/98838967/bef4fbae-ea10-4ef2-91d8-03ed2c0bf3cb">


## Database Schema

<img width="550" alt="db_diagram" src="https://github.com/fac27/wingspan/assets/23071495/19c9c84f-59a0-43a4-8e1a-50d00ba61410">

## What doesn't work

- Deployment
This is because Next.js's Vercel doesn't play nice with sqlite

- Persistant storage

Packages we used: styled componenets, babel
