import { useState } from 'react';
import { Link } from 'react-router-dom';
import RoundedImage from '../components/RoundedImage';
import SearchBar from '../components/SearchBar';

const WelcomePage = () => {
  const [query, setQuery] = useState('');

  const sampleImages = [
    { id: 1, name: 'Beef Stroganoff', url: 'https://www.themealdb.com/images/media/meals/llcbn01574260722.jpg' },
    { id: 2, name: 'Spaghetti Carbonara', url: 'https://www.themealdb.com/images/media/meals/1529444830.jpg' },
    { id: 3, name: 'Chicken Parmesan', url: 'https://www.themealdb.com/images/media/meals/1548772327.jpg' },
    { id: 4, name: 'Tacos', url: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg' },
    { id: 5, name: 'Sushi', url: 'https://www.themealdb.com/images/media/meals/1550441882.jpg' },
  ];

  // Filter images based on search query
  const filteredImages = sampleImages.filter((image) =>
    image.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-4xl font-bold text-center mb-4">Welcome to Recipe Finder!</h1>
      <p className="text-lg text-center mb-8 text-gray-600">
        Discover delicious recipes from around the world. Search, explore, and save your favorites!
      </p>

      {/* SearchBar */}
      <SearchBar setQuery={setQuery} />

      {/* Display Filtered Images */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="overflow-hidden rounded-lg shadow-lg hover:scale-105 transform transition duration-300"
          >
            <RoundedImage
              src={image.url}
              alt={image.name}
              className="w-full h-full object-cover rounded-lg"
            />
            <p className="text-center font-medium mt-2">{image.name}</p>
          </div>
        ))}
      </div>

      {/* Button to Explore Recipes */}
      <div className="mt-8 text-center">
        <Link
          to="/home"
          className="px-6 py-3 bg-blue-500 text-white rounded-lg text-lg shadow-md hover:bg-blue-600"
        >
          Start Exploring Recipes
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
