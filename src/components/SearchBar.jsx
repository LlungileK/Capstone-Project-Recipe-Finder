import { useState } from 'react';

function SearchBar({ setQuery }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value); // Update local state
    setQuery(value); // Update parent query state
  };

  const handleClearInput = () => {
    setInputValue(''); // Clear local input
    setQuery(''); // Clear parent query
  };

  return (
    <div className="flex items-center mb-4">
      <input
        type="text"
        value={inputValue}
        placeholder="Search for recipes..."
        className="w-full p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        onChange={handleInputChange}
      />
      {inputValue && (
        <button
          onClick={handleClearInput}
          className="px-4 py-2 bg-gray-200 rounded-r-md text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        >
          Clear
        </button>
      )}
    </div>
  );
}

export default SearchBar;
