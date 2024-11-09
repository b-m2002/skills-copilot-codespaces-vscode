// Create web server
const express = require('express');
const app = express();
// Create HTTP server
const http = require('http');
const server = http.createServer(app);
// Create socket server
const io = require('socket.io')(server);

// Listen for incoming connection
io.on('connection', (socket) => {
    console.log('New connection', socket.id);
    // Listen for incoming data
    socket.on('comment', (data) => {
        console.log('New comment', data);
        // Send data to all clients
        io.emit('comment', data);
    });
});

// Start server
server.listen(3000, () => {
    console.log('Server started');
});