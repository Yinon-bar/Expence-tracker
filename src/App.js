// import "./App.css";
import ExpenseItem from "./Components/ExpenseItem";
import NewExpence from "./Components/NewExpence/NewExpence";

function App() {
  return (
    <div className="App container">
      <NewExpence />
      <ExpenseItem />
    </div>
  );
}

export default App;
