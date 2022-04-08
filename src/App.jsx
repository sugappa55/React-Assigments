import "./App.css";
import { Counter } from "./components/day-2/counter";
import { Inventory } from "./components/Inventory";
function App() {
  return (
    <div className="App">
      {/* <Inventory /> */}
      <Counter value={5}/>
    </div>
  );
}

export default App;
