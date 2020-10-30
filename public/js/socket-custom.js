var socket = io();

socket.on('connect', function() {
    console.log('me conecte al servidor');
});

socket.on('disconnect', function() {
    console.log('se perdio la coneccion con el servidor');
});

socket.emit('enviarMensaje', {
    usuario: 'Felix Cano',
    message: 'el cuerpo del mensaje'
}, function(respuesta) {
    console.log(respuesta);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log(mensaje);
});