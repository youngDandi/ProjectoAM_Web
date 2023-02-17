import connection from '../dataBase/connection.js';

export const getGastos= (req, res) => {
    const sql = 'SELECT * FROM gasto';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}

export const getGasto = (req, res) => {
  
    const sql = `SELECT * FROM gasto  WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}


export const createGasto= (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO gasto (quantia,origem ,dataEntrada,dataSaida) VALUES('${req.body.quantia}', ${req.body.origem}',${req.body.dataEntrda}, ${req.body.dataSaida})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro ao inserir: ',err);
        }else{
            console.log('Gasto Registrado');
            res.send(result);
        }
    })
}

export const updateGasto = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE gasto SET quantia='${req.body.quantia}', origem ='${req.body.origem}',dataEntrada=${req.body.dataEntrada} , dataSaida=${req.body.dataSaida}WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar DB: ', err);
        } else {
            console.log('Gasto Actualizado');
            res.send(result);
        }
    })
}

export const deleteGasto = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM gasto WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar: ', err);
        } else{
            console.log('Gasto Eliminado Correctamente');
            res.send(result);
        }
    })
}