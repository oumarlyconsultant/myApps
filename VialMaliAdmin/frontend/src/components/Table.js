import { useState } from "react";
import { useTable, useFilters, useSortBy } from "react-table";
import { NavLink, useNavigate } from "react-router-dom";

export default function Table({ columns, data, search=""}) {

  // const employes = useLoaderData()

  // const columns = useMemo(
  //     () => [
  //         {
  //             Header: " ",
  //             columns: [
  //                 {
  //                     Header: "Prenom",
  //                     accessor: "prenom"
  //                 },
  //                 {
  //                     Header: "Nom",
  //                     accessor: "nom"
  //                 },
  //                 {
  //                     Header: "Poste",
  //                     accessor: "poste"
  //                 },
  //                 {
  //                     Header: "Departement",
  //                     accessor: "departement"
  //                 },
  //                 {
  //                     Header: "Numero d'employe",
  //                     accessor: "numeroEmploye"
  //                 }
  //             ]
  //         }
  //     ],[]
  // )



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
  },useFilters,useSortBy);

  ///////////////////// For search filter
  // Create a state
  const [filterInput, setFilterInput] = useState("");

  const navigate = useNavigate();

  // Update the state when input changes
  const handleFilterChange = e => {
    const value = e.target.value || undefined;
    setFilter(search,value)
    setFilterInput(value);
  };

  const handleClick = (event) => {
    console.log("clicked")
    const e = event.target
    console.log(typeof(e))
    // navigate(e)
    console.log(e.textContent)

    // navigate(e.textContent)
  }
  // Input element

  /////////////////////////////////////////

  return (
    <div>
      <input
        value={filterInput}
        onChange={handleFilterChange}
        placeholder={"Recherchez dans la table..."}
        style={{width:"400px",display:search == "" && "none"}}
      />
      <table {...getTableProps()} className="w3-table w3-striped w3-bordered w3-responsive w3-hoverable">
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())} className={column.isSorted? column.isSortedDesc? "sort-desc": "sort-asc":""}>{column.render("Header")}</th>
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
                return <td {...cell.getCellProps()} onClick={handleClick}>{cell.render("Cell")}</td>;
              })}
              
            </tr>
          );
        })}
      </tbody>
    </table>
  
    </div>
    
  );
}