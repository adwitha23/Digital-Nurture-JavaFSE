import CohortDetails from "./CohortDetails";

const cohorts = [
  { name: "Java FSE - A", trainer: "Naveen", status: "ongoing" },
  { name: "React - B", trainer: "Maya", status: "completed" },
  { name: "Spring Boot - C", trainer: "Kiran", status: "ongoing" }
];

function App() {
  return (
    <div>
      <h1>My Academy Dashboard</h1>
      {cohorts.map((cohort) => (
        <CohortDetails key={cohort.name} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
