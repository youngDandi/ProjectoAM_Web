import '../componentes/PVcredito.css';
import { Link } from "react-router-dom";
function PVprevisao() {
    return (
      <div className="painelPV">
       
         <input type="text" placeholder='Quantia' id='InputPV'/> 
         <br />
         
         <input type="date" placeholder='Data de entrada' id='InputPV'/>
         <br />
         <input type="date" placeholder='Data de saída' id='InputPV'/>
         <br />
         
         
      </div>
    );
  }
  
  export default PVprevisao;