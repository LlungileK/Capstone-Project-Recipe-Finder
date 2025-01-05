# Recipe Finder

## Overview
The Recipe Finder is a React-based web application that allows users to search for recipes, view detailed information, and manage their favorite recipes. The application interacts with **TheMealDB API** to fetch recipe data and provides a user-friendly interface styled with **Tailwind CSS**.

## Features
- **Welcome Page:**
  - Introduction to the app.
  - Grid of meal images with a call-to-action button to start exploring recipes.
- **Search Recipes:**
  - Search for recipes using keywords.
  - View search results in a responsive grid layout.
- **Recipe Details:**
  - Detailed information about a selected recipe, including ingredients, instructions, and images.
- **Favorites Management:**
  - Add recipes to a favorites list.
  - View and remove recipes from favorites.
- **Responsive Design:**
  - Fully responsive layout optimized for desktop and mobile devices.

## Technologies Used
- **Frontend:** React
- **Styling:** Tailwind CSS
- **Routing:** React Router
- **API Integration:** TheMealDB API
- **State Management:** React Context API

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/recipe-finder.git
   cd recipe-finder
   ```
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Create a `.env` file in the root directory and add your API key for TheMealDB:
   ```env
   REACT_APP_THEMEALDB_API_KEY=your_api_key_here
   ```

### Running the App
Start the development server:
```bash
npm run dev
# or
yarn dev
```
The application will be available at `http://localhost:3000/`.

## Project Structure
```
recipe-finder/
├── public/               # Static files
├── src/
│   ├── components/       # Reusable components (NavBar, RecipeCard, etc.)
│   ├── context/          # Context providers (FavoritesContext, etc.)
│   ├── pages/            # Page components (WelcomePage, HomePage, etc.)
│   ├── styles/           # Global styles (if any)
│   ├── App.jsx           # Main application component
│   ├── index.jsx         # Application entry point
├── .env                  # Environment variables
├── package.json          # Project metadata and dependencies
├── README.md             # Project documentation
```

## Key Components

### `WelcomePage`
- Displays a welcome message, sample food images, and a call-to-action button linking to the Home Page.

### `HomePage`
- Allows users to search for recipes and view search results.

### `RecipePage`
- Provides detailed information about a selected recipe, including ingredients, preparation steps, and an image.

### `FavoritesPage`
- Displays the list of recipes added to favorites with options to remove them or view details.

### `NavBar`
- A navigation bar for seamless navigation between pages.

## API Integration
- The app uses **TheMealDB API** to fetch recipe data.
- API documentation: [TheMealDB](https://www.themealdb.com/)

## Contributing
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push your branch and create a pull request.

## License
This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
- [TheMealDB API](https://www.themealdb.com/) for providing recipe data.
- Tailwind CSS for making styling efficient and responsive.

---
Happy cooking with Recipe Finder! 🍳
