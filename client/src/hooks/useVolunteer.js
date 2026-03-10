import api from "../services/api";

export default function useVolunteer() {

  const getOpportunities = async () => {
    const res = await api.get("/opportunities");
    return res.data;
  };

  return { getOpportunities };
}