import { useSelector, useDispatch } from "react-redux";

import GifList from "../../components/GifList";
import { getGifs } from "../../store/actions";

const IronManGiphy = () => {
  const dispatch = useDispatch();

  const gifs = useSelector((state) => state.gifs);
  if (!gifs.length) {
    dispatch(getGifs("ironman"));
  }

  return (
    <div className="w-screen flex flex-col items-center">
      <h1 className="font-black text-3xl m-5">IRON MAN GIPHY</h1>
      <div className="h-20"></div>
      <GifList result={gifs || []} />
    </div>
  );
};

export default IronManGiphy;
