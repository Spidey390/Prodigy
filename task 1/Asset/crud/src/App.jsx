import React, { useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [editId, setEditId] = useState(null);

  const addOrUpdateUser = () => {
    if (!name || !email) return alert("Enter name and email");

    if (editId) {
      setUsers(users.map(u => u.id === editId ? { id: editId, name, email } : u));
      setEditId(null);
    } else {
      setUsers([...users, { id: Date.now(), name, email }]);
    }

    setName('');
    setEmail('');
  };

  const editUser = (user) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  const deleteUser = (id) => {
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div>
      <h2>Simple CRUD App</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={addOrUpdateUser}>
        {editId ? "Update" : "Add"}
      </button>

      <ul>
        {users.map((u) => (
          <li key={u.id}>
            {u.name} ({u.email})
            <button onClick={() => editUser(u)}>Edit</button>
            <button onClick={() => deleteUser(u.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;