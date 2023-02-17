import LadoDireito from "./LadoDireito";
import LadoEsquerdo from "./LadoEsquerdo"

function TelaLogin() {
  return (
    <div className="corpo">
      
      <LadoEsquerdo Visitante="Visitante" Login="Login" SignUp="Sign up" LoginE="Login" Link="Se esqueceu a palavra-passe aperte aqui!!" />
      <LadoDireito/>
    </div>
  );
}

export default TelaLogin;