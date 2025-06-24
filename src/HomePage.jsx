import { useState } from "react";
import { DateInput, Input, InputDropDown, Card } from "./Components";
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
        "https://s2-g1.glbimg.com/furKtcGIfEo7Wjb8_0W2wZuRMvM=/0x0:1984x1115/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/B/h/yp3yxKSxWb586z6BC7Bw/51720659599-698f56b696-k.jpg",
      address: "São Paulo - SP",
      departureDate: "10/06/2025",
      arrivalDate: "15/06/2025",
    },
    {
      id: 3,
      title: "Viagem para Salvador",
      imageUrl:
        "https://vinhedoscuiaba.com.br/blog/wp-content/uploads/2023/07/imagem_capa-1-1.jpg",
      address: "Salvador - BA",
      departureDate: "01/07/2025",
      arrivalDate: "07/07/2025",
    },
    {
      id: 4,
      title: "Viagem para Florianópolis",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/V%C3%A1rzea_Grande_MT_panor%C3%A2mica.png/960px-V%C3%A1rzea_Grande_MT_panor%C3%A2mica.png",
      address: "Gotham City - SC",
      departureDate: "15/08/2025",
      arrivalDate: "20/08/2025",
    },
    {
      id: 5,
      title: "Viagem para Fortaleza",
      imageUrl:
        "https://portalmatogrosso.com.br/wp-content/uploads/2022/07/Aerea-Varzea-Grande-e1710171850871.jpg",
      address: "Fim do mundo - MT",
      departureDate: "05/09/2025",
      arrivalDate: "10/09/2025",
    },
    {
      id: 6,
      title: "Viagem para Fortaleza",
      imageUrl:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Trevo_Sinop.jpg/640px-Trevo_Sinop.jpg",
      address: "Sinop - MT",
      departureDate: "05/09/2025",
      arrivalDate: "10/09/2025",
    },
    {
      id: 7,
      title: "Viagem para Fortaleza",
      imageUrl:
        "https://portalmatogrosso.com.br/wp-content/uploads/2022/07/Aerea-Varzea-Grande-e1710171850871.jpg",
      address: "Europa - CBA",
      departureDate: "05/09/2025",
      arrivalDate: "10/09/2025",
    },  
    {
      id: 8,
      title: "Viagem para Fortaleza",
      imageUrl:
        "https://www.midianews.com.br/storage/webdisco/2019/08/09/886x590/d2c874b916e272ab1a12211308997d99.jpg",
      address: "Washington - D.C",
      departureDate: "05/09/2025",
      arrivalDate: "10/09/2025",
    },  
  ];

  const handleCardClick = (trip) => {
    navigate("/RegisterTravel", { state: trip });
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
      </div>
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
  );
}

export default HomePage;
