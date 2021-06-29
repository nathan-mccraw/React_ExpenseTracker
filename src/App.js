import { useState } from "react";
import Form from "./Components/Form";
import Table from "./Components/Table";

const App = () => {
  const [ExpenseArray, setExpenseArray] = useState([]);

  const addExpense = (newExpense) => {
    ExpenseArray.length
      ? setExpenseArray((expense) => [...expense, newExpense])
      : setExpenseArray([newExpense]);
  };

  const handleDelete = (id) => {
    setExpenseArray(ExpenseArray.filter((expense) => expense.id !== id));
  };

  return (
    <div className="App">
      <Form addExpense={addExpense} />
      <Table ExpenseArray={ExpenseArray} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
