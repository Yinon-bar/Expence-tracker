function NewExpence() {
  return (
    <div>
      <form className="col-lg-6 mt-4 rounded-5 mx-auto border border-danger shadow p-4">
        <label className="form-label mt-4">הוצאה חדשה</label>
        <input type="text" className="form-control" placeholder="הכנס הוצאה" />
        <label className="form-label mt-4">סכום</label>
        <input type="number" className="form-control" placeholder="הכנס סכום" />
        <label className="form-label mt-4">תאריך</label>
        <input type="date" className="form-control" placeholder="תאריך" />
        <div className="btns text-center my-3">
          <button type="submit" className="btn btn-success">
            הכנס הוצאה
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewExpence;
