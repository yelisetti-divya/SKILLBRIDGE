import api from "../services/api";

export default function useNGO() {
  const postOpportunity = async (data) => {
    return api.post("/opportunities", data);
  };

  return { postOpportunity };
}