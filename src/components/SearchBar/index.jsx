import { useDispatch } from "react-redux";
import { getGifs, clearGifs } from "../../store/actions";

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleInput = (e) => {
    if (e.keyCode === 13) {
      dispatch(clearGifs());
      dispatch(getGifs(e.target.value));
    }
  };

  return (
    <input
      type="text"
      className="border-2 rounded p-2 w-1/2"
      placeholder="Search Giphy"
      onKeyUp={handleInput}
    />
  );
};

export default SearchBar;
