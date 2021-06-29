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
    setPaymentMethod("");
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
            value={ItemPurchased}
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
            value={LocationOfPurchase}
            onChange={(e) => setLocationOfPurchase(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="dateOfExpense">Date:</label>
          <input
            type="date"
            id="dateOfExpense"
            value={DateOfExpense}
            onChange={(e) => setDateOfExpense(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="costOfExpense">Cost:</label>
          <input
            type="number"
            id="costOfExpense"
            placeholder="Cost of Item"
            value={CostOfExpense}
            onChange={(e) => setCostOfExpense(e.target.value)}
            required
          />
        </div>
        <div className="inputField">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
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
        <button>Add Expense</button>
      </form>
    </div>
  );
};

export default Form;
