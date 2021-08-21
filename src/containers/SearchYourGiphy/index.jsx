import SearchBar from "../../components/SearchBar";
import GifList from "../../components/GifList";

const SearchYourGiphy = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-black text-3xl m-5">SEARCH YOUR GIPHY</h1>
      <div className="h-20 w-full flex items-center justify-center">
        <SearchBar />
      </div>
      <GifList />
    </div>
  );
};

export default SearchYourGiphy;
