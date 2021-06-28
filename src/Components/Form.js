import { useState } from "react";

const Form = () => {
  const [ItemPurchased, setItemPurchased] = useState();
  const [LocationOfPurchase, setLocationOfPurchase] = useState();
  const [DateOfExpense, setDateOfExpense] = useState();
  const [CostOfExpense, setCostOfExpense] = useState();
  const [PaymentMethod, setPaymentMethod] = useState("cash");
  const [ExpenseArray, setExpenseArray] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      ItemPurchased,
      LocationOfPurchase,
      DateOfExpense,
      CostOfExpense,
      PaymentMethod,
    };
    console.log(newExpense);
    ExpenseArray.push(newExpense);
    console.log(ExpenseArray);
    e.target.reset();
  };
  return (
    <div className="Form">
      <h2>Add an item:</h2>
      <form onSubmit={handleSubmit}>
        <div className="inputField">
          <label htmlFor="itemPurchased">What:</label>
          <input
            type="text"
            id="itemPurchased"
            placeholder="Item Purchased"
            onChange={(e) => setItemPurchased(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="location">Where:</label>
          <input
            type="text"
            id="location"
            placeholder="Location of Expense"
            onChange={(e) => setLocationOfPurchase(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="dateOfExpense">Date:</label>
          <input
            type="date"
            id="dateOfExpense"
            required
            onChange={(e) => setDateOfExpense(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="costOfExpense">Cost:</label>
          <input
            type="number"
            id="costOfExpense"
            required
            onChange={(e) => setCostOfExpense(e.target.value)}
          />
        </div>
        <div className="inputField">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            id="paymentMethod"
            required
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="cash">Cash</option>
            <option value="cebt">Debt</option>
            <option value="credit">Credit</option>
          </select>
        </div>
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
