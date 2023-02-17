import LadoEsquerdoCA from "./LadoEsquerdoCA";
import LadoDireitoCA from "./LadoDireitoCA";
function TelaCadastro()
{
    return(
        <div>
        <LadoEsquerdoCA login="Login" signup="Sign Up" SignUpE="Sign Up"/>
        <LadoDireitoCA />
        </div>
    );
}

export default TelaCadastro;