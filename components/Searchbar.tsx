const Searchbar = () => {
  return (
    <div className="flex items-center bg-white rounded-md shadow-md p-2">
      <input
        type="text"
        placeholder="Search..."
        className="w-full px-2 py-1 focus:outline-none"
      />
      <button className="px-3 py-1 bg-blue-500 text-white rounded-md ml-2">
        Search
      </button>
    </div>
  );
};

export default Searchbar;
