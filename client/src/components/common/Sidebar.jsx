import useOpportunity from '../../../hooks/useOpportunity';
import { useState } from 'react';

export default function NGODashboard() {
  const { list, create, remove } = useOpportunity();
  const [title, setTitle] = useState('');

  const add = () => {
    create({ title }).then(() => setTitle(''));
  };

  return (
    <div>
      <h2>NGO Dashboard</h2>
      <h3>Create opportunity</h3>
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" />
      <button onClick={add}>Create</button>
      <h3>Your opportunities</h3>
      <ul>
        {list.map(o => (
          <li key={o.id}>
            {o.title} <button onClick={() => remove(o.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}