import { useState } from "react";
import { Button, Input } from "./Components";
import { Link } from "react-router";

export default function Login() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  return (
    <div className="container">
      <div className="left-content">
        <Input
          label="E-mail ou CPF"
          placeholder="Insira algum texto"
          onChange={handleInputChange}
        />
        <Input
          label="Senha"
          placeholder="Insira algum texto"
          onChange={handleInputChange}
          showCheckbox={true}
          checkboxLabel="Lembre-se de mim"
          onCheckboxChange={(e) => console.log("Checkbox:", e.target.checked)}
        />
        <Link to="/RegisterUser">
          <Button>Entrar</Button>
        </Link>
      </div>
      <div className="right-content">
        <img src="../assets/bus-image-1.svg" alt="Imagem de viagem" />
        <br />
        <h3>
          Explore novos destinos, conecte pessoas e embarque em novas jornadas.
        </h3>
      </div>
    </div>
  );
}
