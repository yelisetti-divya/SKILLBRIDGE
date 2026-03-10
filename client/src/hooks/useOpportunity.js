import api from "../services/api";

export default function useOpportunity() {
  const fetchAll = () => api.get("/opportunities");
  const create = (data) => api.post("/opportunities", data);

  return { fetchAll, create };
}