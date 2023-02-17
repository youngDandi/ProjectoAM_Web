import express from 'express';
import cors from 'cors';
import users from '../routes/routes.js';
import creditos from '../routes/routes.js';
import gastos from '../routes/routes.js';
import balancos from '../routes/routes.js';
import rendimentos  from '../routes/routes.js';
import previsoes  from '../routes/routes.js';
const app = express();

app.set('title', 'SISTEMA  DE GESTAO FINANCEIRO');
app.set('port', 3000);


app.use(cors());
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index')
})

app.use('/users', users);
app.use('/creditos', creditos);
app.use('/gastos', gastos);
app.use('/rendimentos', rendimentos);
app.use('/previsoes', previsoes);
app.use('/balancos ', balancos);

app.listen(app.get('port'), () => {
    console.log( app.get('title') + ' rodando na porta  ' + app.get('port'));
});