import Menu from "./Menu.jsx";
import BarraInformativa from "./BarraInformativa.jsx";
import PainelBM from "./PainelBM.jsx";
function BalancoMensal()
{
    return(
        <div>
        
        <Menu nomeUser="Luís Alexandre"></Menu>

        <BarraInformativa Saldo1="15.000kz" Saldo2="20.000kz" Saldo3="30.000kz"></BarraInformativa>

        <PainelBM></PainelBM>
        </div>
    );
}

export default BalancoMensal;