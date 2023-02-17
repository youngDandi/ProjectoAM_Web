import './BarraInformativa.css';
import '../img/luis.jpg';

function BarraInformativa(props) {
    return (
      <div className='Barra'>

        <div className="perfil">
            
            <h3 id='Saldo'>{props.Saldo1}</h3>
            <img src={require('../img/luis.jpg')} alt="" className="P"></img>
        </div>

        <div className="perfil">
        
        <h3 id='Saldo'>{props.Saldo2}</h3>
        <img src={require('../img/luis.jpg')} alt="" className="P"></img>
        </div>

        <div className="perfil">
        <h3 id='Saldo'>{props.Saldo3}</h3>
        <img src={require('../img/luis.jpg')} alt="" className="P"></img>
        </div>

        
      </div>
    );
  }
  
  export default BarraInformativa;