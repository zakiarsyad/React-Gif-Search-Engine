const GifItem = (props) => {
  return (
    <div className="sm:w-1/3 sm:h-1/3 p-4 flex items-center sm:items-start justify-center">
      <img
        className="object-contain"
        src={`https://media2.giphy.com/media/${props.result}/giphy.gif`}
        alt=""
      />
    </div>
  );
};

export default GifItem;
