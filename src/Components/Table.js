import { useState } from "react";
// import { Expense } from "./Expense";

const Table = () => {
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
          </tr>
        </thead>
        <tbody>{/* <Expense /> */}</tbody>
      </table>
    </div>
  );
};
export default Table;
