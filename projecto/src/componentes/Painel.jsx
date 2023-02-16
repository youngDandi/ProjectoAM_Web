import '../componentes/Painel.css';
import { Link } from "react-router-dom";
function Painel() {
    return (
      <div className="painel">
       
         <input type="text" placeholder='Quantia' id='Input'/> 
         <br />
         <input type="text" placeholder='Origem' id='Input'/>
         <br />
         <input type="date" placeholder='' id='Input'/>
         <br />
         <input type="date" placeholder='' id='Input'/>
         <br />
         
         <br />
         <Link  to={"/HomePage"}> <input type="button" value="Confirmar" id='ConfirmarB'/> </Link>
         <br />
         <Link  to={"/HomePage"}> <input type="button" value="Cancelar" id='CancelarB'/> </Link>
      </div>
    );
  }
  
  export default Painel;