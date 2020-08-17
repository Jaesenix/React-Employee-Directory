import React from 'react';

const SearchResults = (props) => {
    return (
        <tr className="tr">
                    <td><img alt={props.firstName} src={props.photo} /></td>
                    <td>{props.firstName}</td>
                    <td>{props.lastName}</td>
                    <td>{props.email}</td>
                    <td>{props.cell}</td>
                    <td>{props.age}</td>
        </tr>
    )
}

export default SearchResults