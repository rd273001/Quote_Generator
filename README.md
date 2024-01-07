# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Quote Generator App

This is a simple React app created with Vite and styled using Tailwind CSS. The app allows users to generate random quotes, filter quotes by tags, bookmark quotes, and view their bookmarked quotes.

## Features

- Load a random quote on the homepage.
- Generate another random quote with a button click.
- View a list of available tags in a dropdown.
- Filter quotes based on selected tags.
- Bookmark quotes for future reference.
- View and remove bookmarked quotes on the bookmarks page.

## Technologies Used

- React
- Vite
- Tailwind CSS
- Redux Toolkit (for state management)
- React Router (for navigation)
- Axios (for API requests)
- and other dependencies as needed

## Project Structure

The project structure follows the standard setup for a React project with Vite. Here are the main folders:

- `src`: Contains the source code for the React components, Redux slices, and styles.
  - `components`: Reusable UI components.
  - `features`: React components related to specific features (e.g., Quotes, Bookmarks).
  - `store`: Redux slices for managing global state.
  - `styles`: Stylesheets, including Tailwind CSS.
- `public`: Static assets and the `index.html` file.

## Setup Instructions

```bash
git clone <repository-url>
cd quote-generator-app
npm install
npm run dev
```


## Open http://localhost:3000 in your browser to view the app.

- `npm run build`: This will generate an optimized build in the dist folder.