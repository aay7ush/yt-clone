import Sidebar from "../components/Sidebar";
import Searchbar from "../components/Searchbar";

const Home = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <Searchbar />
        <h1 className="mt-4">Home Page</h1>
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default Home;
