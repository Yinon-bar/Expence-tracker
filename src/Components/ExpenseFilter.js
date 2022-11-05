const ExpensesFilter = (props) => {
  const dropDownFilter = (event) => {
    // console.log(event.target.value);
    props.filterChanged(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="form-group col-lg-1">
        <label className="form-label">סינון לפי שנה</label>
        <select onChange={dropDownFilter} className="form-select">
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
