# PhoneFinder Frontend

This is the **frontend** for PhoneFinder, a portfolio project where users can browse, filter, and get AI-powered recommendations for smartphones. Built with **React** and **Vite**, it displays phone previews, details, and integrates with a backend to fetch phone data.

## Features

- Browse phones and view detailed specs
- Filter by brand, price, RAM, storage, battery, and release year
- AI-powered recommendations via a prompt
- Lazy-loaded phone images for better performance

## Tech Stack

- React + TypeScript
- Vite
- GitHub Pages for deployment

## Local Development

```bash
# install dependencies
npm install

# run development server
npm run dev
```

Open your browser at http://localhost:5173

## Deployment

This project is configured to deploy to GitHub Pages:

`npm run build`
`npm run deploy`

Deployed site: https://USERNAME.github.io/phonefinder-frontend/

Note: This frontend expects the backend API to be running and accessible for fetching phone data and AI recommendations.

## Folder Structure

`public/` static files, including phone images
`src/` React components, pages, hooks

Enjoy exploring phones with PhoneFinder!
