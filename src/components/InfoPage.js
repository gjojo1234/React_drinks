import { useContext } from "react";
import { AppContext } from "../AppContext";
import Wrapper from "../wrappers/infoPageWrapper";

const InfoPage = () => {
  const {
    oneDrink: { drink, images },
    removeInfo,
  } = useContext(AppContext);

  return (
    <Wrapper>
      <div className="infoPage">
        <button onClick={() => removeInfo()} className="cancelBtn">
          x
        </button>
        <h1>{drink}</h1>

        <img src={images} alt={drink} />
      </div>
    </Wrapper>
  );
};

export default InfoPage;
