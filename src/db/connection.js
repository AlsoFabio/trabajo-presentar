const mongo=require('moongose');

const conneccion = async()=>{
    try {
        await mongo.connect(process.env.MONGO_URI)
        console.log('conectado a la Base de Datos')
    } catch (error) {
        (error)=>console.log(`No se pudo conectar a la base de datos :( ${error.message}`)
    }
}

module.exports=conneccion;