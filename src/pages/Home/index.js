import { useState } from "react";
import axios from "axios";
import styles from "./index.module.css";
import logo from "../../images/github-logo.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const [usuario, setUsuario] = useState("");
  let navigate = useNavigate();
  const [error, setError] = useState(false);
  function handlePesquisa() {
    axios
      .get(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => {
        const repositories = response.data;
        const repositoriesNames = [];
        repositories.map((repository) => {
          repositoriesNames.push(repository.name);
        });
        localStorage.setItem(
          "repositoriesNames",
          JSON.stringify(repositoriesNames)
        );
        setError(false);
        navigate("/repositories");
      })
      .catch((err) => {
        setError(true);
      });
  }

  return (
    <form className={styles.formulario__container}>
      <img src={logo} alt="" />
      <h1>Consulte o perfil do Github!</h1>
      <p>Consulte os projetos desenvolvidos de qualquer usuário!</p>
      <div>{error ? <p><span>Usuário não encontrado.</span></p> : ""}</div>
      <input
        type="text"
        name="usuario"
        id="usuario"
        value={usuario}
        className="usuarioInput"
        placeholder="Nome do Usuário GITHUB"
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={handlePesquisa}>
        Pesquisar
      </button>
    </form>
  );
}

export default Home;
