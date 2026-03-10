import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    role: "volunteer"
  });

  const submit = async (e) => {
    e.preventDefault();

    await api.post("/auth/register", form);

    navigate("/login");
  };

  return (
    <form onSubmit={submit}>

      <h2>Register</h2>

      <input 
        placeholder="Username"
        onChange={e => setForm({ ...form, username: e.target.value })}
      />

      <input 
        placeholder="Email"
        onChange={e => setForm({ ...form, email: e.target.value })}
      />

      <input 
        type="password"
        placeholder="Password"
        onChange={e => setForm({ ...form, password: e.target.value })}
      />

      <select 
        onChange={e => setForm({ ...form, role: e.target.value })}
      >
        <option value="ngo">NGO</option>
        <option value="volunteer">Volunteer</option>
      </select>

      <button>Register</button>

    </form>
  );
}