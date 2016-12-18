// clave del token, el puerto por el que se conecta a la bd, la localizacion de la bd
module.exports = {
    secret: 'MetallicaEsLaLuz',
    port: process.env.PORT || 5000,
    db: process.env.MONGODB || 'mongodb://localhost/GameReady'
}