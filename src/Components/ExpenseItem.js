function ExpenseItem(props) {
  return (
    <div>
      <div className="card border-danger my-3 shadow ">
        <div className="card-header bg-danger ">הוצאה</div>
        <div className="card-body d-flex">
          <div className="col-lg-6">
            <h4 className="card-title">{props.obj.title}</h4>
            <p className="card-text">תיאור ההוצאה</p>
          </div>
          <div className="col-lg-6 text-center d-flex align-items-center">
            <span className="badge rounded-pill bg-danger p-3 font-size-4 fs-5 mx-auto">
              {props.obj.amount}$
            </span>
            <span className="badge rounded-pill bg-secondary p-3 font-size-4 fs-5 mx-auto">
              11/12/2021
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;
