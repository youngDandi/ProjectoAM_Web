import "../img/logo.png";
import "./LadoEsquerdo.css";
import { Link } from "react-router-dom";

function LadoEsquerdo(props) {
  return (
    <div className="ladoEsquerdo">

      <div id="Header">
      <Link  to={"/HomePage"}>  <h3 id="Visitante">{props.Visitante}</h3> </Link>
      <Link  to={"/TelaCadastro"}>   <h3 id="SignUp">{props.SignUp}</h3> </Link>
           <h3 id="Login">{props.Login}</h3> 
      </div>
       
       

      
       
       <div className="corpo">
              <img src={require('../img/logo.png')} alt="" className="image"></img>

              <h3 id="LoginE">{props.LoginE}</h3>

              <input type="text" id="Email" placeholder="Email"/>
              
              <input type="text" id="Pass" placeholder="palavra-passe"/> 
              
              <Link  to={"/HomePage"}>   <input type="button" value="Entrar" id="botao"  /> </Link>
              
              <h4 id="Link">{props.Link}</h4>
       </div>
       
       
    </div>
  );
}

export default LadoEsquerdo;