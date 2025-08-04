import React, { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  const GuestPage = () => (
    <div>
      <h2>Welcome Guest</h2>
      <p>You can only browse flight details.</p>
      <ul>
        <li>Chennai - Bangalore - 8:00 AM</li>
        <li>Delhi - Mumbai - 2:30 PM</li>
        <li>Hyderabad - Pune - 6:45 PM</li>
      </ul>
      <button onClick={handleLogin}>Login</button>
    </div>
  );

  const UserPage = () => (
    <div>
      <h2>Welcome User</h2>
      <p>You can now book your flight tickets.</p>
      <ul>
        <li>Chennai - Bangalore - ₹1500 <button>Book</button></li>
        <li>Delhi - Mumbai - ₹2200 <button>Book</button></li>
        <li>Hyderabad - Pune - ₹1800 <button>Book</button></li>
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );

  return (
    <div style={{ padding: "20px", textAlign: "left" }}>
      <h1> Ticket Booking App</h1>
      <hr />
      {isLoggedIn ? <UserPage /> : <GuestPage />}
    </div>
  );
}

export default App;
