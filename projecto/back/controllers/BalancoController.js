import connection from '../dataBase/connection.js';

export const getBalancos= (req, res) => {
    const sql = 'SELECT * FROM balanco';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}

export const getBalanco = (req, res) => {
  
    const sql = `SELECT * FROM balanco WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}


export const createBalanco= (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO balanco (rendimentos,gastos ) VALUES('${req.body.rendimentos}', ${req.body.gastos})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro ao inserir: ',err);
        }else{
            console.log('Balanco Registrado');
            res.send(result);
        }
    })
}

export const updateBalanco= (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE balanco SET rendimentos='${req.body.rendimentos}', gastos ='${req.body.gastos} WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar DB: ', err);
        } else {
            console.log('rendimento Actualizado');
            res.send(result);
        }
    })
}

export const deleteBalanco = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM balanco WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar: ', err);
        } else{
            console.log('Balanco Eliminado Correctamente');
            res.send(result);
        }
    })
}