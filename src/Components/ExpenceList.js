import ExpenseItem from "./ExpenseItem";

function ExpenceList(props) {
  return (
    <div>
      {props.expensesArr.map((obj) => (
        <ExpenseItem key={obj.id} obj={obj} />
      ))}
    </div>
  );
}

export default ExpenceList;
