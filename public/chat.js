const socket = io();
const form = document.querySelector('#submit-button');
const message = document.querySelector('#m').value;

form.addEventListener('click', (e) => {
    e.preventDefault();
    socket.emit('chat message', message);
    return false;
})

socket.on('broadcast', msg => {
    document.getElementById(`messages`).innerHTML += `<li> ${msg} </li>`
})