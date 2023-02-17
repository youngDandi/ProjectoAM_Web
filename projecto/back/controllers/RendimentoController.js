import connection from '../dataBase/connection.js';

export const getRendimentos= (req, res) => {
    const sql = 'SELECT * FROM rendimento';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}

export const getRendimento = (req, res) => {
  
    const sql = `SELECT * FROM rendimento  WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}


export const createRendimento= (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO rendimento (quantia,origem ,dataEntrada,dataSaida) VALUES('${req.body.quantia}', ${req.body.origem}',${req.body.dataEntrda}, ${req.body.dataSaida})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro ao inserir: ',err);
        }else{
            console.log('Rendimento Registrado');
            res.send(result);
        }
    })
}

export const updateRendimento= (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE rendimento SET quantia='${req.body.quantia}', origem ='${req.body.origem}',dataEntrada=${req.body.dataEntrada} , dataSaida=${req.body.dataSaida}WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar DB: ', err);
        } else {
            console.log('rendimento Actualizado');
            res.send(result);
        }
    })
}

export const deleteRendimento = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM rendimento WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar: ', err);
        } else{
            console.log('Rendimento Eliminado Correctamente');
            res.send(result);
        }
    })
}