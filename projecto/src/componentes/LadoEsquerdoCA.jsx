import "./LadoEsquerdoCA.css";
import { Link } from "react-router-dom";

function LadoEsquerdoCA(props) {
    return (
      <div className="ladoEsquerdoCA">
  
        
         <div id="Header1">
              <h3 id="signup">{props.signup}</h3>
              <Link  to={"/"}>   <h3 id="login">{props.login}</h3>  </Link>
         </div>
         
         
  
         
         <div className="corpo1">
                <h3 id="SignUpE">{props.SignUpE}</h3>
                <input type="text" id="Nome" placeholder="Nome"/>
                <input type="text" id="Sobrenome" placeholder="Sobrenome"/>
                <input type="date" id="Pass1" />
                <input type="text" id="Pass1" placeholder="Email"/> 
                <input type="text" id="Pass1" placeholder="palavra-passe"/> 
                <Link  to={"/HomePage"}>    <input type="button" value="Entrar" id="botao1" /> </Link>
                
         </div>
         
         
      </div>
    );
  }
  
  export default LadoEsquerdoCA;