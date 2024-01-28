# Wasserstoff Dashboard

Tech Stacks : ReactJs, React-Router, Vite, Tailwind CSS, AntDesign 

##### Live Link:
| Dashboard:  https://wasserstoff-shrikant.netlify.app/
| DashboardWithSalesFigure:  https://wasserstoff-shrikant.netlify.app/sales
| TotalEarning:  https://wasserstoff-shrikant.netlify.app/earning

##### Video Link : Uploading in 1 hr...

## Running locally in development mode

To get started, just clone the repository and run `npm install && npm run dev`:

    git clone https://github.com/StrixV54/wasserstoff.git
    npm install
    npm run dev

Note: Should be started on Localhost, like this (http://localhost:5173/)

## Building and deploying in production

If you wanted to run this site in production, you should install modules then build the site with `npm run build` and run it with `npm start`:

    npm install
    npm run build
    npm start

You should run `npm run build` again any time you make changes to the site.

## Running locally in development mode

The Project has three Figma Designs to implement:

- Dashboard is main and with header and footer , which is common. Map is positioned as absolute and same as Side stats over the screen.
- Map has a 2 layers one for shadows and one above with hexagons to make it possibly close to figma.
- Popup detail of location is also absolute too get to position of map.
- Sales figure is graph , due to no deep insite on data, just have created as the figma's data using absolute positioning.
- Last Figma has too many elements, some common circles can be used to apply DRY principle but could not cover due to less time got.