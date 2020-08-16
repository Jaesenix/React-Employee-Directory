import React from 'react';
import EmployeeTable from "./components/EmployeeTable";

function SearchResults(props) {
    return (
        <td className="list-group search-results">
            {props.results.map((results, index) => (
                <tr key> = {index}
                    <td>{results.picture.medium}</td>
                    <td>{results.name.first}</td>
                    <td>{results.name.last}</td>
                    <td>{results.email}</td>
                    <td>{results.cell}</td>
                    <td>{results.timezone}</td>
                </tr>
            ))}
        </td>
    )
}

export default SearchResults