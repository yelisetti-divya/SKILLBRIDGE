import useOpportunity from '../../../hooks/useOpportunity';
import useVolunteer from '../../../hooks/useVolunteer';

export default function VolunteerDashboard() {
  const { list, setSelected } = useOpportunity();
  const { applications } = useVolunteer();

  return (
    <div>
      <h2>Volunteer Dashboard</h2>
      <h3>Opportunities</h3>
      <ul>
        {list.map(o => (
          <li key={o.id}>
            {o.title} – <button onClick={() => setSelected(o)}>View</button>
          </li>
        ))}
      </ul>
      <h3>Your applications</h3>
      <ul>
        {applications.map(a => (
          <li key={a.id}>Opportunity {a.opportunity_id} – {a.status}</li>
        ))}
      </ul>
    </div>
  );
}