import Boxes from "./Boxes";
import "./styles.css";

export default function App() {
  return <Boxes boxX={4} boxY={3} hideBoxes={["0,1", "2,2", "3,1"]} />;
}
