const Box = ({ onBoxClick, selected, hidden, coordinates }) => {
  return (
    <div
      className={`box ${selected ? "blue" : ""} ${hidden ? "hidden" : ""}`}
      onClick={() => !selected && !hidden && onBoxClick(coordinates)}
    >
      Coordinates: {coordinates}
      <br />
    </div>
  );
};

export default Box;
