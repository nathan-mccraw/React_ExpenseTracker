import { useState } from "react";

const Form = ({ addExpense }) => {
  const [ItemPurchased, setItemPurchased] = useState("");
  const [LocationOfPurchase, setLocationOfPurchase] = useState("");
  const [DateOfExpense, setDateOfExpense] = useState("");
  const [CostOfExpense, setCostOfExpense] = useState("");
  const [PaymentMethod, setPaymentMethod] = useState("cash");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      item: ItemPurchased,
      location: LocationOfPurchase,
      date: DateOfExpense,
      cost: CostOfExpense,
      method: PaymentMethod,
      id: Date.now(),
    };
    addExpense(newExpense);

    setItemPurchased("");
    setLocationOfPurchase("");
    setDateOfExpense("");
    setCostOfExpense("");
    setPaymentMethod("cash");
  };

  return (
    <div className="row col-4">
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="border rounded bg-dark bg-gradient p-4"
        >
          <div className="inputField">
            <label htmlFor="itemPurchased" className="form-label">
              What:
            </label>
            <input
              className="form-control"
              type="text"
              id="itemPurchased"
              placeholder="Item Purchased"
              value={ItemPurchased}
              onChange={(e) => setItemPurchased(e.target.value)}
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="location" className="form-label">
              Where:
            </label>
            <input
              className="form-control"
              type="text"
              id="location"
              placeholder="Location of Expense"
              value={LocationOfPurchase}
              onChange={(e) => setLocationOfPurchase(e.target.value)}
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="dateOfExpense" className="form-label">
              Date:
            </label>
            <input
              className="form-control"
              type="date"
              id="dateOfExpense"
              value={DateOfExpense}
              onChange={(e) => setDateOfExpense(e.target.value)}
              required
            />
          </div>
          <div className="inputField">
            <label htmlFor="costOfExpense" className="form-label">
              Cost:
            </label>
            <div className="input-group">
              <span className="input-group-text">$</span>
              <input
                className="form-control"
                type="number"
                id="costOfExpense"
                placeholder="Cost of Item"
                value={CostOfExpense}
                onChange={(e) => setCostOfExpense(e.target.value)}
                required
              />
              <span className="input-group-text">.00</span>
            </div>
          </div>
          <div className="inputField">
            <label htmlFor="paymentMethod" className="form-label">
              Payment Method
            </label>
            <select
              className="form-control"
              id="paymentMethod"
              value={PaymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
              required
            >
              <option value="cash">Cash</option>
              <option value="debt">Debt</option>
              <option value="credit">Credit</option>
            </select>
          </div>
          <button className="btn btn-lg btn-secondary mt-4">Add Expense</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
