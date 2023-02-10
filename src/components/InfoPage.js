import { useContext } from "react";
import { AppContext } from "../AppContext";
import "./infoPage.css";

const InfoPage = () => {
  const {
    oneDrink: { drink, images },
    removeInfo,
  } = useContext(AppContext);

  return (
    <div className="infoPage">
      <button onClick={() => removeInfo()} className="cancelBtn">
        x
      </button>
      <h1>{drink}</h1>

      <img src={images} alt={drink} />
    </div>
  );
};

export default InfoPage;
