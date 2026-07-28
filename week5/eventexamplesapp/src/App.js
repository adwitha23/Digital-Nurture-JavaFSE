import { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => setCounter(counter + 1);
  const decrement = () => setCounter(counter - 1);
  const sayHello = () => alert("Hello! Counter was increased.");
  const handleIncrement = () => {
    increment();
    sayHello();
  };
  const sayWelcome = (message) => alert(message);
  const onPress = () => alert("I was clicked");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Event Examples</h2>
      <p>Counter: {counter}</p>
      <button onClick={handleIncrement}>Increment</button>{" "}
      <button onClick={decrement}>Decrement</button>{" "}
      <button onClick={() => sayWelcome("Welcome")}>Say Welcome</button>{" "}
      <button onClick={onPress}>OnPress</button>
      <hr />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
