import "./App.css";
import Counter from "./counter";
import Visibility from "./visibility";
import Input from "./input";
import ColorChange from "./colorChange";

function App() {
  return (
    <div className="container">
      <Counter />
      <Visibility />
      <Input string="initial_value" />
      <ColorChange />
    </div>
  );
}

export default App;
