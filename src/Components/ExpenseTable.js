const ExpenseTable = ({ ExpenseArray, handleDelete }) => {
  return (
    <tbody>
      {ExpenseArray.map((expense) => (
        <tr key={expense.id}>
          <td>{expense.item}</td>
          <td>{expense.location}</td>
          <td>{expense.date}</td>
          <td>{expense.cost}</td>
          <td>{expense.method}</td>
          <td>
            <button onClick={handleDelete(expense.id)}>X</button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ExpenseTable;
