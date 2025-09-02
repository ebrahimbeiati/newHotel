import React, { useEffect, useState } from "react";
import CustomerProfile from "./CustomerProfile";
import { numberOfNight } from "../../utils/Nights";

const SearchResults = ({ results }) => {
  const [selectedRow, setSelectedRow] = useState(null);
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    if (selectedRow) {
      fetch(`https://cyf-react.glitch.me/customers/${selectedRow}`)
        .then((response) => response.json())
        .then((data) => setCustomerData(data))
        .catch((error) => {
          console.error("Error fetching customer data:", error);
        });
    }
  }, [selectedRow]);

  const handleRowClick = (id) => {
    if (id === selectedRow) {
      setSelectedRow(null);
      setCustomerData(null);
    } else {
      setSelectedRow(id);
    }
  };

  if (!results || !Array.isArray(results)) {
    return (
      <div style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-secondary)' }}>
        No results to display
      </div>
    );
  }

  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Title</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Room ID</th>
            <th scope="col">Check In</th>
            <th scope="col">Check Out</th>
            <th scope="col">Nights</th>
            <th scope="col">Profiles</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result) => (
            <tr
              key={result.id}
              className={result.id === selectedRow ? "selected-colour" : ""}
              onClick={() => handleRowClick(result.id)}
              style={{ cursor: 'pointer' }}
            >
              <td>{result.id}</td>
              <td>{result.title}</td>
              <td>{result.firstName}</td>
              <td>{result.surname}</td>
              <td>{result.email}</td>
              <td>{result.roomId}</td>
              <td>{result.checkInDate}</td>
              <td>{result.checkOutDate}</td>
              <td>
                {numberOfNight({
                  checkInDate: result.checkInDate,
                  checkOutDate: result.checkOutDate,
                })}
              </td>
              <td>
                <button 
                  className="btn btn-outline"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleRowClick(result.id);
                  }}
                  style={{ padding: '0.25rem 0.5rem', fontSize: '0.75rem' }}
                >
                  Show profile
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {customerData && <CustomerProfile customerData={customerData} />}
    </div>
  );
};

export default SearchResults;
