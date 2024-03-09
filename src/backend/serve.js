const express = require('express');//importaos el framework de express
const mongoose = require('mongoose');//Libreria de modelado de mongo
const bodyParser = require('body-parser')//middleware para analizar el cuerpo de la peticion
const cors = require('cors');//Permite solicitudes

const app = express();//creamos una instancia de express llamada app
const PORT = process.env.PORT || 3000;//Definimos el puerto del servidor

app.listen(PORT, () => {
    console.log(`servidor corriendo en el puerto ${PORT}`) //Mensaje de inicio de servidor 
  })

  //AHORA EL MIDDLEWARE
app.use(bodyParser.json());//Usamos esto para analizar el cuerpo y pasarlo a json
app.use(cors());//Permite solicitudes de recursos

  //AHORA LA CONEXION A MONGO ATLAS
//AQUI DEBEMOS ESTABLECER NUESTRO PROPIOS DATOS Y CADENA DE CONEXION OTORGADA ATLAS

mongoose.connect('mongodb+srv://gh375026:ghdzmtz140607@cluster0.h8l0aqe.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    dbName: 'utcompas',//Nombre de mi base de datos(no coleccion)
    useNewUrlParser: true,//Para analizar la URL
    useUnifiedTopology: true//Para utilizar tipologia unificada
  }).then(() => {//Una promesa, si la cadena de conexion es correcta y conecta nos muestra un mensaje
    console.log('Conenctado a la base de datos de mongo atlas');
  }).catch((error) => {//Un catch de error, al tener un valor incorrecto o un problema de 
    console.log('Error Al conectar buuu', error)
  })
  
  /* A PARTIR DE AQUI GENERO AL USUARIO */
  //Crear nuestra estructura schema de nuestrO DOCUMENTO
  const usuariosSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    name: String,
    bio: String,
    profile_picture: String,
    friends: [mongoose.Schema.Types.ObjectId], // Si los amigos son IDs de usuarios, puedes usar un array de ObjectIds
    created_at: Date
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);
module.exports = Usuarios;

// Ruta para obtener todos los usuarios
app.get('/api/usuarios/', async (req, res) => {
    try {
        const usuarios = await Usuarios.find({});
        res.json(usuarios)
    }
    catch (error) {
        console.log(error)
    }
});

const publicacionesSchema = new mongoose.Schema({
  user_id:{
    type:mongoose.Schema.Types.ObjectId,
    ref:'Usuarios' //Usar el nombre correcto del modelo de usuarios
  },
  content:String,
  image: String,
  likes:Number,
  comments:[{
    user_id:{
      type:mongoose.mongoose.Schema.Types.ObjectId,
      ref:'Usuario'
    }
  }],
    content_at:{
      type:Date,
      default: Date.now
    }
});

//Desde aqui empezamos con la bd de publicaciones


const Publicaciones = mongoose.model('publicaciones', publicacionesSchema);
module.exports = Publicaciones;

// Ruta para obtener todos los usuarios
app.get('/api/publicaciones/', async (req, res) => {
    try {
        const publicaciones = await Publicaciones.find({});
        Publicaciones.find({}).populate('user_id','username');
        res.json(publicaciones)
    }
    catch (error) {
        console.log(error)
    }
});