import ListOfPlayers from "./ListOfPlayers";
import IndianPlayers from "./IndianPlayers";

function App() {
  const flag = true;

  if (flag) {
    return <ListOfPlayers />;
  }
  return <IndianPlayers />;
}

export default App;
