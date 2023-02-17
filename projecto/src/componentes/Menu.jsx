import '../img/luis.jpg';
import './Menu.css';
import { Link } from "react-router-dom";
function Menu(props) {
    return (
      <div className='menu'>
        
        <div className="User">
            <img src={require('../img/luis.jpg')} alt="" className="user"></img>
            <h3 id='nomeUser'>{props.nomeUser}</h3>
        </div>

        <div className='grelha'>
            <ul>
            <Link  to={"/BalancoMensal"}>   <h4>Balanço Mensal</h4> </Link>
            <Link  to={"/Credito"}>    <h4>Crédito</h4> </Link>
            <Link  to={"/Gastos"}>   <h4>Gastos</h4> </Link>
            <Link  to={"/Previsao"}>   <h4>Previsão Mensal</h4> </Link>
            <Link  to={"/Rendimentos"}>   <h4>Rendimentos</h4> </Link>
            </ul>
            
        </div>

      </div>
    );
  }
  
  export default Menu;