function IndianPlayers() {
  const indianPlayers = [
    "Sachin",
    "Virat",
    "Rohit",
    "Rahul",
    "Pant",
    "Jadeja"
  ];
  const [odd1, even1, odd2, even2, odd3, even3] = indianPlayers;
  const oddTeam = [odd1, odd2, odd3];
  const evenTeam = [even1, even2, even3];

  const t20Players = ["Surya", "Hardik", "Bumrah"];
  const ranjiPlayers = ["Pujara", "Saha", "Iyer"];
  const mergedPlayers = [...t20Players, ...ranjiPlayers];

  return (
    <div>
      <h2>Odd Team Players</h2>
      <ul>
        {oddTeam.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
      <h2>Even Team Players</h2>
      <ul>
        {evenTeam.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
      <h2>Merged T20 and Ranji Players</h2>
      <ul>
        {mergedPlayers.map((player) => (
          <li key={player}>{player}</li>
        ))}
      </ul>
    </div>
  );
}

export default IndianPlayers;
