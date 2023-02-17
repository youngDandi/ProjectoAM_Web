import connection from '../dataBase/connection.js';

export const getPrevisoes= (req, res) => {
    const sql = 'SELECT * FROM previsaomensal';
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}

export const getPrevisao= (req, res) => {
  
    const sql = `SELECT * FROM previsaomensal  WHERE id=${req.body.id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('ocorreu um erro : ', err);
        } else{
            res.send(result);
        }
    })
}


export const createPrevisao= (req, res) => {
    console.log(req.body);
    const sql = `INSERT INTO previsaomensal (rendimentos,gastos ,dataInicio,dataTermino) VALUES('${req.body.rendimentos}', ${req.body.gastos}',${req.body.dataInicio}, ${req.body.dataTermino})`;
    const data = req.body;
    connection.query(sql, data, (err, result) => {
        if(err){
            console.log('erro ao inserir: ',err);
        }else{
            console.log('Previsao Registrada');
            res.send(result);
        }
    })
}

export const updatePrevisao = (req, res) => {
    const id = req.params.id;
    const sql = `UPDATE gasto SET rendimentos='${req.body.rendimentos}', gastos='${req.body.gastos}',dataInicio=${req.body.dataInicio} , dataTermino=${req.body.dataTermino}WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao actualizar DB: ', err);
        } else {
            console.log('Previsao Actualizada');
            res.send(result);
        }
    })
}

export const deletePrevisao = (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM previsaomensal WHERE id=${id}`;
    connection.query(sql, (err, result) => {
        if(err){
            console.log('erro ao deletar: ', err);
        } else{
            console.log('Previsao Eliminada Correctamente');
            res.send(result);
        }
    })
}