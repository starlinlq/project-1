import ReactDOM from "react-dom";
import { MovieSearch } from "./components";

const App = () => {
  return (
    <div>
      <MovieSearch />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
