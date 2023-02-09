import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./infoPage.css";

const InfoPage = () => {
  const {
    oneDrink: { drink, images },
  } = useContext(AppContext);

  return (
    <div className="infoPage">
      <h1>{drink}</h1>

      <img src={images} alt={drink} />
    </div>
  );
};

export default InfoPage;
