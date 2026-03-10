import { useEffect, useState } from "react";
import useVolunteer from "../../hooks/useVolunteer";

export default function VolunteerDashboard() {

  const { getOpportunities } = useVolunteer();
  const [list, setList] = useState([]);

  useEffect(() => {
    getOpportunities().then(setList);
  }, []);

  return (
    <div>
      <h2>Volunteer Dashboard</h2>

      {list.map((o) => (
        <div key={o._id} style={{ border: "1px solid #ccc", margin: 10 }}>
          <h3>{o.title}</h3>
          <p>{o.description}</p>
          <p>{o.location}</p>
        </div>
      ))}

    </div>
  );
}