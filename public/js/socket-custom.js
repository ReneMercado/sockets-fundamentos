var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

//ESCUCHAR INFORMACIÓN
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
});

//ENVIAR INFORMACIÓN
socket.emit('enviarMensaje', {
    usuario: 'Rene',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta server: ', resp);
});

//ESCUCHAR INFORMACIÓN
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});