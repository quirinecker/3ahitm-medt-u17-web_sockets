const socket = io();
const form = document.querySelector('#submit-button');
const message = document.querySelector('#m').value;

form.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('chat message', 'HALLO');
    return false;
})