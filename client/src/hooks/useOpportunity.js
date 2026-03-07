import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useOpportunity() {
  const [list, setList] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    api.get('/opportunities').then(r => setList(r.data));
  }, []);

  const create = (data) => api.post('/opportunities', data).then(r => setList([...list, r.data]));
  const update = (id, data) => api.put(`/opportunities/${id}`, data);
  const remove = (id) => api.delete(`/opportunities/${id}`).then(() => setList(list.filter(o => o.id !== id)));

  return { list, selected, setSelected, create, update, remove };
}