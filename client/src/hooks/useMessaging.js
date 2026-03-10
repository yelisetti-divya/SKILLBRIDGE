import api from "../services/api";

export default function useMessaging() {
  const sendMessage = (data) => api.post("/messages", data);
  const fetchMessages = () => api.get("/messages");

  return { sendMessage, fetchMessages };
}