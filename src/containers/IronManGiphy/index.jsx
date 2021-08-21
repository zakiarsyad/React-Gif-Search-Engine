import GifList from "../../components/GifList";

const IronManGiphy = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-black text-3xl m-5">IRON MAN GIPHY</h1>
      <div className="h-20"></div>
      <GifList />
    </div>
  );
};

export default IronManGiphy;
