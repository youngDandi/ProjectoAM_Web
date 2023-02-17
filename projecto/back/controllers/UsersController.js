import connection from '../dataBase/connection.js';

export const getUsers = (req, res) => {
    const sql = 'SELECT * FROM users';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error: ', err);
        } else{
            res.send(result);
        }
    })
}

export const getUser = (req, res) => {
   
    const sql = `SELECT * FROM users WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}


export const createUser = (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO users(nome, sobreNome,idade,email,passe) VALUES('${req.body.nome}', ${req.body.sobreNome},${req.body.idade}, ${req.body.email}, ${req.body.passe})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro na insercao a bd: ',err);
        }else{
            console.log('Usuario Registrado');
            res.send(result);
        }
    })
}

export const updateUser = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE users SET nome='${req.body.nome}',idade=${req.body.idade}',email=${req.body.email} ',sobreNome=${req.body.sobreNome}',passe=${req.body.passe}WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar dados  na DB: ', err);
        } else {
            console.log('Usuario Actualizado');
            res.send(result);
        }
    })
}

export const deleteUser = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar dados DB: ', err);
        } else{
            console.log('Usuario Eliminado Correctamente');
            res.send(result);
        }
    })
}