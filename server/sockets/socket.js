const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'admin',
        message: 'Bienvenido a la aplicaccion'
    });

    client.on('disconnect', () => {
        console.log('usuario desconecgtado');
    });

    client.on('enviarMensaje', (data, callback) => {

        console.log(data);

        client.broadcast.emit('enviarMensaje', data);

        // if (mensaje.usuario) {
        //     callback({
        //         respuesta: 'Todo Bien....'
        //     });
        // } else {
        //     callback({
        //         respuesta: 'Algo Salio Mal !!!!!!'
        //     });
        // }

    });
});