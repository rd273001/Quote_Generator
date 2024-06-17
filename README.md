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

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](#) &nbsp;&nbsp;
[![Node.js](https://img.shields.io/badge/Node%20js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](#) &nbsp;&nbsp;
[![Redux.js](https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white)](#) &nbsp;&nbsp;
[![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)](#) &nbsp;&nbsp;
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](#) &nbsp;&nbsp;
[![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)](#) &nbsp;&nbsp;
[![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)](#)

- React
- Vite
- Tailwind CSS
- Redux Toolkit (for state management)
- React Router Dom (for navigation)
- Redux Toolkit

## Project Structure

The project structure follows the standard setup for a React project with Vite. Here are the main folders:

- `src`: Contains the source code for the React components, Redux slices, and styles.
  - `pages`: Components for Pages of App(Home, Bookmarks).
  - `components`: Reusable UI components (e.g.,Layout, QuoteCard, LoadingIndicator).
  - `store`: Redux slices for managing global state.
  - `styles`: Stylesheets, including Tailwind CSS.
- `dist`: Static assets and the `index.html` file, folder created on running `npm run build`.

## Setup Instructions

```bash
git clone https://github.com/rd273001/Quote_Generator.git
cd Quote_Generator
npm install
npm run dev
```

## Open <http://localhost:3000> in your browser to view the app

- `npm run build`: This will generate an optimized build in the dist folder.
