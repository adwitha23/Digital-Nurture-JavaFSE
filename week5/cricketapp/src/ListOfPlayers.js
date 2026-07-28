const players = [
  { name: "Player 1", score: 90 },
  { name: "Player 2", score: 60 },
  { name: "Player 3", score: 85 },
  { name: "Player 4", score: 45 },
  { name: "Player 5", score: 72 },
  { name: "Player 6", score: 68 },
  { name: "Player 7", score: 95 },
  { name: "Player 8", score: 54 },
  { name: "Player 9", score: 76 },
  { name: "Player 10", score: 63 },
  { name: "Player 11", score: 88 }
];

function ListOfPlayers() {
  const belowSeventy = players.filter((player) => player.score < 70);

  return (
    <div>
      <h2>All Players</h2>
      <ul>
        {players.map((player) => (
          <li key={player.name}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>

      <h2>Players with score below 70</h2>
      <ul>
        {belowSeventy.map((player) => (
          <li key={player.name}>
            {player.name} - {player.score}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListOfPlayers;
