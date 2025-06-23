import { useState } from "react";
import { DateInput, Input, InputDropDown, Card} from "./Components";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const [inputValue, setInputValue] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");
  const navigate = useNavigate();

  const trips = [
    {
      id: 1,
      title: "Viagem para o Rio",
      imageUrl:
        "https://www.corridaperfeita.com/wp-content/uploads/2023/02/blogpost-4.jpg",
      address: "Rio de Janeiro - RJ",
      departureDate: "20/05/2025",
      arrivalDate: "25/05/2025",
    },
    {
      id: 2,
      title: "Viagem para São Paulo",
      imageUrl:
        "https://www.prefeitura.sp.gov.br/cidade/secretarias/upload/capa_guiaSP.jpg",
      address: "São Paulo - SP",
      departureDate: "10/06/2025",
      arrivalDate: "15/06/2025",
    },
    {
      id: 3,
      title: "Viagem para Salvador",
      imageUrl:
        "https://a.cdn-hotels.com/gdcs/production189/d372/86617b2a-2e3c-4c8e-a190-19e61bdb5225.jpg",
      address: "Salvador - BA",
      departureDate: "01/07/2025",
      arrivalDate: "07/07/2025",
    },
    {
      id: 4,
      title: "Viagem para Florianópolis",
      imageUrl:
        "https://viagemeturismo.abril.com.br/wp-content/uploads/2016/11/ilha-do-campeche-florianopolis-santa-catarina.jpg",
      address: "Florianópolis - SC",
      departureDate: "15/08/2025",
      arrivalDate: "20/08/2025",
    },
    {
      id: 5,
      title: "Viagem para Fortaleza",
      imageUrl:
        "https://media.istockphoto.com/id/1295440364/pt/foto/fortaleza-beach-in-northeast-brazil.jpg",
      address: "Fortaleza - CE",
      departureDate: "05/09/2025",
      arrivalDate: "10/09/2025",
    },
  ];

  const handleCardClick = (trip) => {
    navigate("/bus", { state: trip });
  };
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleDropdownChange = (e) => {
    setDropdownValue(e.target.value);
  };
  return (
    <div className="homepage-container">
      <br />
      <h2>Viagens cadastradas na cidade</h2>
      <br />
      <br />

      <div className="homepage-filter">
        <InputDropDown
          label="Saindo de..."
          options={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
        />

        <FaArrowRight style={{ color: "#4E664A", fontSize: "1.875rem" }} />

        <InputDropDown
          label="Indo para..."
          options={["Option 1", "Option 2", "Option 3"]}
          placeholder="Select an option"
        />

        <div className="date-group">
          <DateInput label="Ida..." />
          <DateInput label="Volta..." />
        </div>
        <div className="card-container">
          <div className="card-container">
            {trips.map((trip) => (
              <Card
                key={trip.id}
                title={trip.title}
                imageUrl={trip.imageUrl}
                address={trip.address}
                departureDate={trip.departureDate}
                arrivalDate={trip.arrivalDate}
                onClick={() => handleCardClick(trip)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
