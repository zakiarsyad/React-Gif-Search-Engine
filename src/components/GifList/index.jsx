import GifItem from "../GifItem";

const GifList = (props) => {
  return (
    <div className="h-9/12 w-9/12 m-6 flex flex-wrap justify-center">
      {props.result &&
        props.result.map((gif, i) => {
          return <GifItem result={gif} key={i} />;
        })}
    </div>
  );
};

export default GifList;
