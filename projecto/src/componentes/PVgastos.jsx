import '../componentes/PVcredito.css';
import { Link } from "react-router-dom";
function PVgastos() {
    return (
      <div className="painelPV">
       
         <input type="text" placeholder='Quantia' id='InputPV'/> 
         <br />
         
         <input type="text" placeholder='Origem' id='InputPV'/>
         <br />
         <input type="date" placeholder='Data de entrada' id='InputPV'/>
         <br />
         <input type="date" placeholder='Data de saída' id='InputPV'/>
         <br />
         
         
      </div>
    );
  }
  
  export default PVgastos;