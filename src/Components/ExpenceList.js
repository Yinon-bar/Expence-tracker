import { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";

function ExpenceList(props) {
  const [year, setYear] = useState("");
  const filterChanged = (selectedYear) => {
    // console.log(selectedYear);
    setYear(selectedYear);
  };

  return (
    <div>
      <h3>{year}</h3>
      <ExpensesFilter filterChanged={filterChanged} />
      {props.expensesArr.map((obj) => (
        <ExpenseItem key={+obj.id} data={obj} />
      ))}
    </div>
  );
}

export default ExpenceList;
