// import "./App.css";
import { useState } from "react";
import ExpenceList from "./Components/ExpenceList";
import NewExpence from "./Components/NewExpence/NewExpence";

const dummyArr = [
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
function App() {
  const [expenses, setExpenses] = useState(dummyArr);
  console.log(expenses);
  const newExpense = (expense) => {
    console.log(expense);
    setExpenses((prevExpence) => {
      return [expense, ...prevExpence];
    });
  };

  return (
    <div className="App container">
      <NewExpence onAddExpense={newExpense} />
      <ExpenceList expensesArr={expenses} />
    </div>
  );
}

export default App;
