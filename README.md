## Welcome to my NBA Roster app! Before I start my ReadMe, I'd like to kindly let the devs at the NBA know that my NY Knicks are winning the NBA championship in the next 4 years. Anyways....

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## API Routes and general roadmap of the project

I was able to create some extra NextJS components to spice up the project. If you look inside the components directory - you will see a Navbar, Footer, & Layout component. The layout component allows for the navbar and footer to be included on every page easily. Please note, that these components were some last minute additions for fun and they are definitely not perfect.

The Navbar has usable links to Home, Players, and Teams. Feel free to use these to navigate between the pages.

NBA Player JSON route - http://localhost:3000/api/players

NBA Team JSON route - http://localhost:3000/api/teams

NBA Player Page - http://localhost:3000/players

NBA Team Page - http://localhost:3000/teams

I also went ahead and created a TeamCard component in additon to the Playercard component, which I used to display the teams in a nicer way on the teams page.

