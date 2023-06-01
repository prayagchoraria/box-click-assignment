import { useRef, useState } from "react";
import Box from "./Box";

const Boxes = ({ boxX, boxY, hideBoxes }) => {
  const xArray = new Array(boxX).fill(0);
  const yArray = new Array(boxY).fill(0);

  const totalBoxes = boxX * boxY - hideBoxes.length;

  const [clickedBoxes, setClickedBoxes] = useState([]);

  const clickedBoxesRef = useRef([]);
  const deselectRef = useRef(false);

  const deselect = () => {
    const newClickedBoxes = [...clickedBoxes];
    newClickedBoxes.pop();
    setClickedBoxes(newClickedBoxes);
    clickedBoxesRef.current = newClickedBoxes;
  };

  if (clickedBoxesRef.current.length === 0) {
    deselectRef.current = false;
  }

  if (clickedBoxesRef.current.length === totalBoxes) {
    deselectRef.current = true;
  }

  if (deselectRef.current) {
    setTimeout(() => {
      deselect();
    }, 1000);
  }

  const onBoxClick = (coordinate) => {
    const newClickedBoxes = [...clickedBoxes];
    newClickedBoxes.push(coordinate);
    setClickedBoxes(newClickedBoxes);

    clickedBoxesRef.current.push(coordinate);
  };

  return (
    <div className="box-container">
      {yArray.map((a, y) => (
        <div className="box-row">
          {xArray.map((a, x) => (
            <Box
              key={`${x},${y}`}
              onBoxClick={onBoxClick}
              selected={clickedBoxes.includes(`${x},${y}`)}
              hidden={hideBoxes.includes(`${x},${y}`)}
              coordinates={`${x},${y}`}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Boxes;
