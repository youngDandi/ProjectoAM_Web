import Menu from "./Menu.jsx";
import "./homePage.css";
import BarraInformativa from "./BarraInformativa.jsx";
import { useEffect, useState } from "react";

function HomePage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://192.168.1.2:3001/users");
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  const handleDelete = (id) => {
    fetch(`http://192.168.1.2:3001/users/${id}`, { method: "DELETE" })
      .then(() => setData(data.filter((user) => user.id !== id)))
      .catch((error) => console.error(error));
  };

  return (
    <>
      <div>
        <Menu nomeUser="Luís Alexandre"></Menu>
        <BarraInformativa
          Saldo1="15.000kz"
          Saldo2="20.000kz"
          Saldo3="30.000kz"
        ></BarraInformativa>
      </div>
      <div className="user-table">
        <table>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Endereço</th>
            <th>Password</th>
            <th>Deletar</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.username}</td>
              <td>{item.email}</td>
              <td>{item.endereco}</td>
              <td>**************</td>
              <td>
                <button onClick={() => handleDelete(item.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}

export default HomePage;