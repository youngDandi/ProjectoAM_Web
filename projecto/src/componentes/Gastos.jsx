import Menu from "./Menu.jsx";
import BarraInformativa from "./BarraInformativa.jsx";
import Painel from "./Painel.jsx";
import PVgastos from "./PVgastos.jsx";
function Gastos()
{
    return(
        <div>
        
        <Menu nomeUser="Luís Alexandre"></Menu>

        <BarraInformativa Saldo1="15.000kz" Saldo2="20.000kz" Saldo3="30.000kz"></BarraInformativa>

        <Painel></Painel>
        <PVgastos></PVgastos>
        </div>
    );
}

export default Gastos;