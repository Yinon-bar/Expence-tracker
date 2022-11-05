import { useState } from "react";

function NewExpence() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleCahnge = (event) => {
    setTitle(event.target.value);
  };
  const amountCahnge = (event) => {
    setAmount(event.target.value);
  };
  const dateCahnge = (event) => {
    setDate(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    const formData = {
      fTitle: title,
      fAmount: amount,
      fDate: new Date(date),
    };
    console.log(formData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div>
      <form
        onSubmit={submitForm}
        className="col-lg-6 mt-4 rounded-5 mx-auto border border-danger shadow p-4"
      >
        <label className="form-label mt-4">הוצאה חדשה</label>
        <input
          value={title}
          onChange={titleCahnge}
          type="text"
          className="form-control"
          placeholder="הכנס הוצאה"
        />
        <label className="form-label mt-4">סכום</label>
        <input
          value={amount}
          onChange={amountCahnge}
          type="number"
          className="form-control"
          placeholder="הכנס סכום"
        />
        <label className="form-label mt-4">תאריך</label>
        <input
          value={date}
          onChange={dateCahnge}
          type="date"
          className="form-control"
          placeholder="תאריך"
        />
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
