function ExpenseItem() {
  return (
    <div>
      <div className="card border-danger mb-3 m-3 shadow rounded rounded-4">
        <div className="card-header">הוצאה</div>
        <div className="card-body d-flex">
          <div className="col-lg-6">
            <h4 className="card-title">קניית עכבר</h4>
            <p className="card-text">קניית עכבר לצורך לימודים</p>
          </div>
          <div className="col-lg-6 text-center d-flex align-items-center">
            <span className="badge rounded-pill bg-danger p-3 font-size-4 fs-5 mx-auto">
              150$
            </span>
            <span className="badge rounded-pill bg-secondary p-3 font-size-4 fs-5 mx-auto">
              12/11/2022
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExpenseItem;