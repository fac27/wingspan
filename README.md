# Wingspan

## About

This is the week 5 project of the FAC software developer apprenticeship. A Nextjs full-stack application for collecting birds inspired by the game [wingspan](https://stonemaiergames.com/games/wingspan/).


## Installation

1. Clone the repo

  ```git clone https://github.com/fac27/wingspan```

2. Cd into the repo

```cd wingspan```

3. Install npm packages

```npm install```

4. Seed the database

```node database/seed.js```

5. Run the development server

```npm run dev```

6. Navigate to http://localhost:3000/ in the browser


### User Stories

- As a user I want to land on a page with images of birds (name, image) so that I can get an idea of what birds are on offer
- As a user I want to be able to filter the original view of the birds so I can narrow my decision making (filter by habitat)
- As a user I want to be able to select a bird to view more data so that I can get more information about the birds
- As a use I want to be able to select a quantity of birds so that I can add them to my birdcage

## Design

Wireframes were created using figma and can be found [HERE](https://www.figma.com/file/iiODlCs5mHMrSqUgyhGMW3/Homepage?type=design).

<img width="300" alt="Screenshot 2023-06-21 at 14 14 31" src="https://github.com/fac27/wingspan/assets/98838967/bef4fbae-ea10-4ef2-91d8-03ed2c0bf3cb">

## Database Schema

<img width="550" alt="db_diagram" src="https://github.com/fac27/wingspan/assets/23071495/19c9c84f-59a0-43a4-8e1a-50d00ba61410">

## Known issues

- Deployment
  This is because Next.js's Vercel doesn't play nice with sqlite (a requirement of the project)


## Testing

E2E tests were created with [Cypress](https://docs.cypress.io/guides/overview/why-cypress)

To run the tests:

Make sure development server is running
```npm run dev```

Open cypress application 
```npx cypress open```

Select E2E Testing in the application

Select chrome as your browser

Run Tests

