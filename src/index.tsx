import ReactDOM from "react-dom";
import { GuestList } from "./components";

const App = () => {
  return (
    <div>
      <GuestList />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
