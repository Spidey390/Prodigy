import React, { useState } from 'react';

function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');

  const calculateBmi = () => {
    if (height && weight) {
      const h = height / 100;
      const result = (weight / (h * h)).toFixed(2);
      setBmi(result);
    } else {
      alert("Enter both height and weight");
    }
  };

  return (
    <div>
      <h2>Simple BMI Calculator</h2>
      <div>
        <label>Height (cm): </label>
        <input type="number" value={height} onChange={(e) => setHeight(e.target.value)} />
      </div>
      <div>
        <label>Weight (kg): </label>
        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
      </div>
      <button onClick={calculateBmi}>Calculate</button>
      {bmi && <h3>Your BMI: {bmi}</h3>}
    </div>
  );
}

export default App;
