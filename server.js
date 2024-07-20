const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: "http://localhost:3000", // Cambia esto a la URL de tu frontend si es necesario
        methods: ["GET", "POST"]
    }
});

// Middleware CORS
app.use(cors());

// Manejadores de eventos de Socket.IO
io.on('connection', (socket) => {
    console.log('a user connected');
    
    socket.on('newComment', (data) => {
        // Broadcast the comment and username to all connected clients
        io.emit('newComment', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
    console.log(`Servidor Socket.IO escuchando en el puerto ${PORT}`);
});
