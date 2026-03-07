import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useNGO() {
  const [opportunities, setOpportunities] = useState([]);
  useEffect(() => {
    api.get('/opportunities').then(r => setOpportunities(r.data));
  }, []);
  return { opportunities };
}