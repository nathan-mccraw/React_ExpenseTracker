import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const [ExpenseArray, setExpenseArray] = useState(
    JSON.parse(localStorage.getItem("ExpenseArray")) || []
  );

  const addExpense = (newExpense) => {
    ExpenseArray.length
      ? setExpenseArray((expense) => [...expense, newExpense])
      : setExpenseArray([newExpense]);

    ExpenseArray.length
      ? localStorage.setItem("ExpenseArray", JSON.stringify(ExpenseArray))
      : localStorage.setItem("ExpenseArray", JSON.stringify(newExpense));
  };

  const handleDelete = (id) => {
    const newArray = ExpenseArray.filter((expense) => expense.id !== id);
    setExpenseArray(newArray);
    localStorage.setItem("expenseArray", JSON.stringify(newArray));
  };

  return (
    <div className="App d-grid gap-5">
      <div className="text-center">
        <h1>Expense Tracker</h1>
        <small>created by N. McCraw</small>
      </div>
      <div className="container">
        <div className="row justify-content-evenly">
          <Form addExpense={addExpense} />
          <Table ExpenseArray={ExpenseArray} handleDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default App;
