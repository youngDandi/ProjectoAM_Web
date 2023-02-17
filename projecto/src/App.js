import './App.css';
import TelaLogin  from "./componentes/TelaLogin";
import TelaCadastro  from "./componentes/TelaCadastro";
import HomePage  from "./componentes/HomePage";
import BalancoMensal from './componentes/BalancoMensal';
import Credito from './componentes/Credito';
import Gastos from './componentes/Gastos';
import Previsao from './componentes/Previsao';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Rendimentos from './componentes/Rendimetnos';

function App() {
  return (
    <div>
     
       <Router>
            <Routes>
                <Route path='/' element={<TelaLogin></TelaLogin>} />
                <Route path='/TelaCadastro' element={<TelaCadastro></TelaCadastro>} />
                <Route path='/HomePage' element={<HomePage></HomePage>} />
                <Route path='/BalancoMensal' element={<BalancoMensal></BalancoMensal>} />
                <Route path='/Credito' element={<Credito></Credito>} />
                <Route path='/Gastos' element={<Gastos></Gastos>} />
                <Route path='/Previsao' element={<Previsao></Previsao>} />
                <Route path='/Rendimentos' element={<Rendimentos></Rendimentos>} />
            </Routes>
       </Router>

    </div>
  );
}

export default App;
