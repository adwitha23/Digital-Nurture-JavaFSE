import { useState } from "react";

function GuestPage({ onLogin }) {
  return (
    <div>
      <h2>Guest Page</h2>
      <p>You can browse flights. Login to book tickets.</p>
      <button onClick={onLogin}>Login</button>
    </div>
  );
}

function UserPage({ onLogout }) {
  return (
    <div>
      <h2>User Page</h2>
      <p>You can now book your flight tickets.</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ticket Booking App</h1>
      {loggedIn ? (
        <UserPage onLogout={() => setLoggedIn(false)} />
      ) : (
        <GuestPage onLogin={() => setLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
