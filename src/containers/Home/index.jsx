import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import logo from "./giphy.png";
import { clearGifs } from "../../store/actions";

const Home = () => {
  const dispatch = useDispatch();
  dispatch(clearGifs());

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="px-12 text-center font-black text-3xl mb-10">
        WELCOME TO YOUR GIPHY
      </h1>

      <img
        className="w-1/2 sm:w-1/4 shadow-lg rounded mb-24"
        src={logo}
        alt=""
      />

      <Link
        to="/iron-man-giphy"
        className="underline text-indigo-700 font-medium"
      >
        IRON MAN GIPHY
      </Link>

      <Link
        to="/search-your-giphy"
        className="underline text-indigo-700 font-medium"
      >
        SEARCH YOUR GIPHY
      </Link>
    </div>
  );
};

export default Home;
