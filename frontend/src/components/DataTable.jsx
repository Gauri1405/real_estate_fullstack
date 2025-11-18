import React from "react";

function DataTable({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Year</th>
          <th>Price</th>
          <th>Demand</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
            <td>{row.year}</td>
            <td>{row.price}</td>
            <td>{row.demand}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DataTable;
