require('dotenv').config();

const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const cors = require('cors');

const connectDB = require('../config/db'); // correct path to db.js

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/users');
const oppRoutes = require('./routes/opportunities');
const appRoutes = require('./routes/applications');
const msgRoutes = require('./routes/messages');

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/opportunities', oppRoutes);
app.use('/api/applications', appRoutes);
app.use('/api/messages', msgRoutes);

// Create HTTP server
const server = http.createServer(app);

// Socket.io setup
const io = socketio(server, {
  cors: {
    origin: "*"
  }
});

io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  socket.on('join', (room) => {
    socket.join(room);
  });

  socket.on('sendMessage', (data) => {
    io.to(data.room).emit('message', data);
  });
});

// Start server
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});