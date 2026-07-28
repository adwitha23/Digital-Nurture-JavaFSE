import { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const value = Number(rupees);
    if (!Number.isNaN(value)) {
      setEuro((value / 90).toFixed(2));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Currency Convertor</h3>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter INR"
      />
      <button type="submit">Convert</button>
      {euro && <p>Euro: {euro}</p>}
    </form>
  );
}

export default CurrencyConvertor;
