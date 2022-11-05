import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function ExpenceList(props) {
  const [year, setYear] = useState("");
  const filterChanged = (selectedYear) => {
    // console.log(selectedYear);
    setYear(selectedYear);
  };

  const filteredExpenses = props.expensesArr.filter((expense) => {
    // console.log(expense);
    return expense.date.getFullYear().toString() === year;
  });

  return (
    <div>
      <h3>{year}</h3>
      <ExpensesFilter filterChanged={filterChanged} />
      {filteredExpenses.length === 0 ? (
        <h2>There is no expenses to show</h2>
      ) : (
        filteredExpenses.map((obj) => <ExpenseItem key={+obj.id} data={obj} />)
      )}
    </div>
  );
}

export default ExpenceList;
