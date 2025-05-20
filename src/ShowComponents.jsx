import React, { useState } from "react";
import { Button } from "./components/Button";
import { Input } from "./Components/Input";
import { InputDropDown } from "./components/InputDropDown";
import { Card } from "./components/Card";
import { FormComponent } from "./Components/FormComponent";

function ShowComponents() {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };

  return (
    <div>
      <h1>ShowComponents</h1>
      <br />
      {/* Button Component */}
      <Button onClick={handleButtonClick}>Entrar</Button>
      <br />
      <br />
      <br />
      {/* InputDropDown Component */}
      <InputDropDown
        options={["Option 1", "Option 2", "Option 3"]}
        placeholder="Select an option"
        onChange={handleDropdownChange}
      />
      <p>Selected Option: {dropdownValue}</p>

      <br />
      <br />
      <br />
      {/* Card Component */}
      <Card
        title="Viagem para o Rio"
        imageUrl="https://www.corridaperfeita.com/wp-content/uploads/2023/02/blogpost-4.jpg"
        address="Rio de Janeiro - RJ"
        departureDate="20/05/2025"
        arrivalDate="25/05/2025"
        onClick={() => console.log("Card clicado")}
      />

      <br />
      <br />
      <br />
      <Input
        label="Label"
        placeholder="Insira algum texto"
        onChange={handleInputChange}
        showCheckbox={true}
        checkboxLabel="Aceito os termos"
        onCheckboxChange={(e) => console.log("Checkbox:", e.target.checked)}
      />

      <br />
      <br />
      <br />

      <FormComponent
        title="Informações do Usuário"
        inputs={[
          {
            label: "Nome",
            placeholder: "Produto A",
            resCol: 15,
            onChange: () => {},
          },
          {
            label: "Categoria",
            placeholder: "Ex: Bebida",
            resCol: 15,
            onChange: () => {},
          },
          {
            label: "Quantidade",
            placeholder: "0",
            resCol: 10,
            onChange: () => {},
          },
          {
            label: "Preço",
            placeholder: "R$ 0,00",
            resCol: 10,
            onChange: () => {},
          },
          {
            label: "SKU",
            placeholder: "Código",
            resCol: 10,
            onChange: () => {},
          },
        ]}
      />
      <br />
      <br />
      <br />
    </div>
  );
}

export default ShowComponents;
