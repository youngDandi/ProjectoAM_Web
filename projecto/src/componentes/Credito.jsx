import Menu from "./Menu.jsx";
import BarraInformativa from "./BarraInformativa.jsx";
import PainelC from "./PainelC.jsx";
import PVcredito from "./PVcredito.jsx";
function Credito()
{
    return(
        <div>
        
        <Menu nomeUser="Luís Alexandre"></Menu>

        <BarraInformativa Saldo1="15.000kz" Saldo2="20.000kz" Saldo3="30.000kz"></BarraInformativa>

        <PainelC></PainelC>

        <PVcredito></PVcredito>
        </div>
    );
}

export default Credito;