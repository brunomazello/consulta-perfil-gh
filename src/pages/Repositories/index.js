import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";

function Repositories() {
  const [repositories, setRepositories] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let repositoriesNames = localStorage.getItem("repositoriesNames");
    if (repositoriesNames != null) {
      repositoriesNames = JSON.parse(repositoriesNames);
      setRepositories(repositoriesNames);
      localStorage.clear();
    } else {
      navigate("/");
    }
  }, []);

  return (
    <div className={styles.formulario__container}>
      <h1>
        Lista de Projetos:
        <hr />
      </h1>

      {repositories.map((repository) => {
        return (
          <ul>
            <li><span>Repositório:</span> {repository}</li>
          </ul>
        );
      })}
      <>
        <Button name="Voltar" to="/" />
      </>
    </div>
  );
}

export default Repositories;
