import { useState } from "react";
import { useTable, useFilters } from "react-table";

export default function Table({ columns, data }, props) {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
    setFilter, // The useFilter Hook provides a way to set the filter
  } = useTable({
    columns,
    data,
  },useFilters);

  ///////////////////// For search filter
  // Create a state
  const [filterInput, setFilterInput] = useState("");

  // Update the state when input changes
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter("prenom",value)
    setFilterInput(value);
  };

  // Input element

  /////////////////////////////////////////

  return (
    <div>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Recherchez dans la table..."}
      />
      <table {...getTableProps()} className="w3-table w3-striped w3-bordered w3-responsive w3-hoverable">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render("Cell")}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  
    </div>
    
  );
}