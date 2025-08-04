import React from 'react';

function App() {
  const offices = [
    { name: "Space A", rent: 45000, address: "Chennai" },
    { name: "Space B", rent: 80000, address: "Bangalore" }
  ];

  const imageURL = "https://via.placeholder.com/300x150";

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <h1>Office Space Rentals</h1>
      <img src="/office.webp" alt="Office" width="300" />
      <ul>
        {offices.map((office, index) => (
          <li key={index}>
            <strong>{office.name}</strong><br />
            Rent: <span style={{ color: office.rent > 60000 ? "green" : "red" }}>
              ₹{office.rent}
            </span><br />
            Address: {office.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
