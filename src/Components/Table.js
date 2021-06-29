import ExpenseTable from "./ExpenseTable";

const Table = ({ ExpenseArray, handleDelete }) => {
  return (
    <div id="table">
      <h2>Expenses</h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Location</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Type</th>
            <th></th>
          </tr>
        </thead>
        <ExpenseTable ExpenseArray={ExpenseArray} handleDelete={handleDelete} />
      </table>
    </div>
  );
};
export default Table;
