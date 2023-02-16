import Menu from "./Menu.jsx";
import BarraInformativa from "./BarraInformativa.jsx";
import PainelC from "./PainelC.jsx";
import PVprevisao from "./PVprevisao.jsx";
function Previsao()
{
    return(
        <div>
        
        <Menu nomeUser="Luís Alexandre"></Menu>

        <BarraInformativa Saldo1="15.000kz" Saldo2="20.000kz" Saldo3="30.000kz"></BarraInformativa>

        <PainelC></PainelC>
        <PVprevisao></PVprevisao>
        </div>
    );
}

export default Previsao;