const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen">
      <div className="p-4">
        <h1 className="text-2xl font-semibold">YouTube Clone</h1>
      </div>
      <ul>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Home</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Trending</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">
          Subscriptions
        </li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">Library</li>
        <li className="px-4 py-2 hover:bg-gray-700 cursor-pointer">History</li>
      </ul>
    </div>
  );
};

export default Sidebar;
