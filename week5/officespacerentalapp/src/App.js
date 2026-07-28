function App() {
  const officeImage =
    "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=80";

  const office = {
    name: "Skyline Workspace",
    rent: 55000,
    address: "MG Road, Bengaluru"
  };

  const officeList = [
    { name: "City Hub", rent: 45000, address: "Chennai" },
    { name: "Tech Park Office", rent: 70000, address: "Hyderabad" },
    { name: "Lake View Office", rent: 61000, address: "Pune" }
  ];

  return (
    <div style={{ fontFamily: "Arial", padding: "20px" }}>
      <h1>Office Space Rental App</h1>
      <img src={officeImage} alt="office" width="420" />
      <h2>Featured Office</h2>
      <p>Name: {office.name}</p>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: {office.rent}
      </p>
      <p>Address: {office.address}</p>

      <h2>More Office Spaces</h2>
      {officeList.map((item) => (
        <div key={item.name}>
          <p>Name: {item.name}</p>
          <p style={{ color: item.rent < 60000 ? "red" : "green" }}>
            Rent: {item.rent}
          </p>
          <p>Address: {item.address}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
