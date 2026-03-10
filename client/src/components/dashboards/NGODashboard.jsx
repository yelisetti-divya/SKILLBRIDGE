import { useState } from "react";
import useNGO from "../../hooks/useNGO";

export default function NGODashboard() {

  const { postOpportunity } = useNGO();

  const [form, setForm] = useState({
    title: "",
    description: "",
    location: ""
  });

  const submit = async (e) => {
    e.preventDefault();
    await postOpportunity(form);
    alert("Opportunity posted!");
  };

  return (
    <div>
      <h2>NGO Dashboard</h2>

      <form onSubmit={submit}>
        <input placeholder="Title" onChange={e => setForm({ ...form, title: e.target.value })} />
        <input placeholder="Description" onChange={e => setForm({ ...form, description: e.target.value })} />
        <input placeholder="Location" onChange={e => setForm({ ...form, location: e.target.value })} />

        <button>Post Opportunity</button>
      </form>
    </div>
  );
}