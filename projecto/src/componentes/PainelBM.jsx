import '../componentes/Painel.css';
import { Link } from "react-router-dom";
function PainelBM() {
    return (
      <div className="painel">
       
         <input type="text" placeholder='Rendimentos' id='Input'/> 
         <br />
         <input type="text" placeholder='Gastos' id='Input'/>

         <br />
         <Link  to={"/HomePage"}> <input type="button" value="Voltar" id='ConfirmarB'/> </Link>
         
      </div>
    );
  }
  
  export default PainelBM;