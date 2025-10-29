import React, { useState } from 'react';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      alert("Please fill all fields");
    } else {
      alert("Form submitted!");
      console.log({ username, email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Simple Form</h2>
      <div>
        <label>Username: </label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
