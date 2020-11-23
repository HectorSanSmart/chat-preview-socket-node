var socket = io();

let params = new URLSearchParams(window.location.search);
if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html'
    throw new Error('El nombre y la sala son necesarios');
}

let usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
};

socket.on('connect', function() {
    console.log('Conectado al servidor');
    console.log(usuario);
    socket.emit('entrarChat', usuario, (resp) => {
        console.log('Usuarios conectados ', resp);
    })
});

// escuchar
socket.on('disconnect', function() {

    console.log('Perdimos conexión con el servidor');

});


// Enviar información
// socket.emit('crearMensaje', {
//     usuario: 'Fernando',
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('enviarMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});

// Escuchar información
socket.on('crearMensaje', function(mensaje) {

    console.log('Servidor:', mensaje);

});



//cuando un usuario entra o sale del chat
socket.on('listaPersonas', function(personas) {

    console.log('Servidor:', personas);

});


//enviar mensajes privados
socket.on('mensajePrivado', function(mensaje) {

    console.log('Mensaje privado', mensaje);

});