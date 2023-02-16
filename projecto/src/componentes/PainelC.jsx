import '../componentes/Painel.css';
import { Link } from "react-router-dom";
function PainelC() {
    return (
      <div className="painel">
       
         <input type="text" placeholder='Quantia' id='Input'/> 
         <br />
         
         <input type="date" placeholder='Data de entrada' id='Input'/>
         <br />
         <input type="date" placeholder='Data de saída' id='Input'/>
         <br />
         
         <br />
         <Link  to={"/HomePage"}>  <input type="button" value="Confirmar" id='ConfirmarB'/> </Link>
         <br />
         <Link  to={"/HomePage"}> <input type="button" value="Cancelar" id='CancelarB'/> </Link>
      </div>
    );
  }
  
  export default PainelC;