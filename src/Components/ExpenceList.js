import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function ExpenceList(props) {
  const [year, setYear] = useState("");
  const filterChanged = (selectedYear) => {
    // console.log(selectedYear);
    setYear(selectedYear);
    console.log(year);
  };

  return (
    <div>
      <h3>{year}</h3>
      <ExpensesFilter filterChanged={filterChanged} />
      {props.expensesArr.map((obj) => (
        <ExpenseItem key={obj.id} obj={obj} />
      ))}
    </div>
  );
}

export default ExpenceList;
