import "../stylesheets/mystyle.css";

function CalculateScore({ name, school, total, goal }) {
  const average = total / goal;

  return (
    <div className="card">
      <h2>Student Score Card</h2>
      <p>Name: {name}</p>
      <p>School: {school}</p>
      <p>Total: {total}</p>
      <p>Subjects: {goal}</p>
      <p>Average: {average.toFixed(2)}</p>
    </div>
  );
}

export default CalculateScore;
