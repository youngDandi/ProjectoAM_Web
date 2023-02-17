import mysql from 'mysql';
import  DB  from './config.js';

const connection = mysql.createConnection(DB);

connection.connect((err, conn) => {
    if(err){
        console.log('Error al conectar a la DB: ', err);

    } else{
        console.log('conectado com sucesso');
        return conn;
    }
})

export default connection;