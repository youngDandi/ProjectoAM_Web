import { useEffect, useState } from "react";
import "../img/logo.png";
import "./LadoEsquerdo.css";
import { Link } from "react-router-dom";

function LadoEsquerdo(props) {
  // const [data, setData] = useState([]);
  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  // useEffect(() => {
  //   async function fetchData() {
  //     const response = await fetch("http://192.168.1.2:3001/users");
  //     const data = await response.json();
  //     setData(data);
  //   }
  //   fetchData();
  // }, []);

  // const handleLogin = () => {
  //   const user = data.find(
  //     (u) => u.username === username && u.password === password
  //   );
  //   if (user) {
  //     alert("Login feito!");
  //   } else {
  //     alert("Nome ou senha incorretos");
  //   }
  // };
  return (
    <div className="ladoEsquerdo">
      <div id="Header">
        <Link to={"/HomePage"}>
          {" "}
          <h3 id="Visitante">{props.Visitante}</h3>{" "}
        </Link>
        <Link to={"/TelaCadastro"}>
          {" "}
          <h3 id="SignUp">{props.SignUp}</h3>{" "}
        </Link>
        <h3 id="Login">{props.Login}</h3>
      </div>
      <div className="corpo">
        <img src={require("../img/logo.png")} alt="" className="image"></img>
        <h3 id="LoginE">{props.LoginE}</h3>
        <input
          type="text"
          id="Email"
          placeholder="Nome de usuário"
          // value={username}
          // onChange={setUsername}
        />
        <input
          type="text"
          id="Pass"
          placeholder="palavra-passe"
          // value={password}
          // onChange={setPassword}
        />
        <Link to={"/HomePage"}>
          {" "}
          <input
            type="button"
            value="Entrar"
            id="botao"
            // onSubmit={handleLogin}
          />{" "}
        </Link>
        <h4 id="Link">{props.Link}</h4>
      </div>
    </div>
  );
}

export default LadoEsquerdo;
