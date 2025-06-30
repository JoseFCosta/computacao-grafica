import { useState } from "react";
import { Link } from "react-router";
import { Input, Button, FormComponent, ButtonCancel } from "./Components";

function RegisterUser() {
  const [inputValue, setInputValue] = useState("");
  const [layout, setlayout] = useState(true);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleChangeLayout = () => setlayout((layout) => !layout);

  return (
    <>
      {layout ? (
        <div className="container">
          <div className="left-content-register">
            <img src="/public/logo-1.svg" alt="Imagem de viagem" />
            <br />
            <br />
            <br />
            <h3>Onde há estrada, há histórias esperando para serem vividas.</h3>
          </div>
          <div className="right-content-register">
            <Input
              label="CPF"
              placeholder="Digite o seu cpf"
              onChange={handleInputChange}
            />
            <Button onClick={handleChangeLayout}>Registrar</Button>
          </div>
        </div>
      ) : (
        <div className="container-register">
          <FormComponent
            title="Dados pessoais"
            inputs={[
              {
                label: "Nome completo",
                placeholder: "Digite o seu nome",
                resCol: 25,
              },
              {
                label: "CPF",
                placeholder: "Digite o seu cpf, ex: 000.000.000-00",
                resCol: 15,
              },
              {
                label: "Data de nascimento",
                placeholder: "00/00/0000",
                resCol: 10,
              },
            ]}
          />

          <FormComponent
            title="Contato"
            inputs={[
              {
                label: "Email",
                placeholder: "Digite o seu email, ex: email@gmail.com",
                resCol: 25,
              },
              {
                label: "Celular",
                placeholder: "Ex: 00 9 0000-0000",
                resCol: 15,
              },
              {
                label: "Telefone",
                placeholder: "Ex: 00 0000-0000",
                resCol: 10,
              },
            ]}
          />

          <FormComponent
            title="Endereço"
            inputs={[
              {
                label: "Cep",
                placeholder: "Digite o seu cep, ex: 00000-000",
                resCol: 10,
              },
              {
                label: "Cidade",
                placeholder: "Digite sua cidade",
                resCol: 15,
              },
              {
                label: "Estado",
                placeholder: "Ex: MT",
                resCol: 5,
              },
              {
                label: "Endereço",
                placeholder: "Digite o seu endereço",
                resCol: 15,
              },
              {
                label: "Número",
                placeholder: "Ex: 156",
                resCol: 5,
              },
              {
                label: "Complemento",
                placeholder: "Ex: Apt 129-0",
                resCol: 10,
              },
            ]}
          />
          <div className="footer-register">
            <ButtonCancel onClick={handleChangeLayout}>Cancelar</ButtonCancel>
            <Link to="/">
              <Button>Registrar</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default RegisterUser;
