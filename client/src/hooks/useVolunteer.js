import { useState, useEffect } from 'react';
import api from '../services/api';

export default function useVolunteer() {
  const [applications, setApplications] = useState([]);
  useEffect(() => {
    api.get('/applications').then(r => setApplications(r.data));
  }, []);
  return { applications };
}