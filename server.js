const express = require('express')
const app = express();
const http = require('http').createServer(app);
const socketIo = require('socket.io')
const io = socketIo(http);

app.use(express.static('public'));
app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
})

io.on('connection', socket => {
    console.log('a user has connected')

    socket.on('disconnect', () => {
        console.log('user disconnected')
    })

    socket.on('chat message', msg => {
        console.log(msg);
    })
})

http.listen(3000, () => {
    console.log('listening to port *:3000')
});