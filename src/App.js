// import "./App.css";
import ExpenceList from "./Components/ExpenceList";
import NewExpence from "./Components/NewExpence/NewExpence";

function App() {
  const expensesArr = [
    {
      id: 1,
      title: "Wireless mouse",
      amount: 199,
      date: new Date(2020, 7, 14),
    },
    {
      id: 2,
      title: "Toilet paper",
      amount: 14,
      date: new Date(2020, 7, 20),
    },
    {
      id: 3,
      title: "Chair",
      amount: 59,
      date: new Date(2020, 8, 29),
    },
    {
      id: 4,
      title: "Table",
      amount: 235,
      date: new Date(2020, 10, 5),
    },
  ];

  return (
    <div className="App container">
      <NewExpence />
      <ExpenceList expensesArr={expensesArr} />
    </div>
  );
}

export default App;
