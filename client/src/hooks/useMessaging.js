import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import api from '../services/api';

let socket;

export default function useMessaging(user) {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    if (!user) return;
    socket = io('http://localhost:5000');
    socket.emit('join', `user_${user.id}`);
    socket.on('message', msg => setMessages(m => [...m, msg]));
  }, [user]);

  const send = (receiverId, content) => {
    const room = `user_${receiverId}`;
    socket.emit('sendMessage', { room, content, sender_id: user.id, receiver_id: receiverId });
    api.post('/messages', { receiver_id: receiverId, content });
  };

  const loadConversation = (otherId) => {
    return api.get(`/messages/conversation/${otherId}`).then(r => setMessages(r.data));
  };

  return { messages, send, loadConversation };
}