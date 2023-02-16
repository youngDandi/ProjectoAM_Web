import connection from '../dataBase/connection.js';

export const getCreditos = (req, res) => {
    const sql = 'SELECT * FROM credito';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error: ', err);
        } else{
            res.send(result);
        }
    })
}

export const getCredito = (req, res) => {
  
    const sql = `SELECT * FROM credito WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('Ha ocurrido un error: ', err);
        } else{
            res.send(result);
        }
    })
}


export const createCredito= (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO credito(quantia, dataEntrada,dataSaida) VALUES('${req.body.quantia}', ${req.body.dataEntrda}, ${req.body.dataSaida})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro ao inserir: ',err);
        }else{
            console.log('Credito Registrado');
            res.send(result);
        }
    })
}

export const updateCredito = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE credito SET quantia='${req.body.quantia}', dataEntrada=${req.body.dataEntrada} , dataSaida=${req.body.dataSaida}WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar DB: ', err);
        } else {
            console.log('Credito Actualizado');
            res.send(result);
        }
    })
}

export const deleteCredito = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM credito WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar: ', err);
        } else{
            console.log('Credito Eliminado Correctamente');
            res.send(result);
        }
    })
}