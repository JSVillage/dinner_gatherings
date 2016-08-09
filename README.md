Dinner Gathering application
=============================

Problem and Solution
----------------------------

Problem: As an event organizer, I don't have enough visibility into people's schedules to know when the most ideal date is to schedule an event.

Solution: I want a tool that provides transparency into my friend's availability so that I can plan a social gathering that will result in a higher attendance rate with less hassle.

Discovery Survey: https://docs.google.com/forms/d/14qr0Lv2-xg4eU_oNLWOyCCl4gob0zsdjff107yaGoEA/edit?usp=sharing

User Journey: https://www.lucidchart.com/documents/view/800b32d0-760e-4ca4-bda8-a4f5ec499021

Wireframes: https://www.lucidchart.com/documents/view/10348ac0-33ec-4528-8ad6-b0fa6986aae5

Main branches
--------------------------

Production = master
Development = dev

## Features

- Webpack development and production environment configuration
- Webpack SCSS configuration
- React Hot loader
- React Router configuration
- React, Redux configuration
- Testing environment configured with Mocha and Chai
- Linting with Airbnb eslint configuration

## Getting Started

npm install dependencies

````
cd herder

npm install
````

### Start development server with hot reloading

````
npm run dev
````

### Testing

Run test once

````
npm run test
````

Test watch

````
npm run test:watch
````

### Linting

For linting i'm using Eslint with Airbnb Eslint configuration

````
npm run lint
````

### Production

Build for production

````
npm run build
````

Start production server
