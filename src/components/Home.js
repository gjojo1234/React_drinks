import React, { useContext } from "react";
import { AppContext } from "../AppContext";

import "./home.css";
import InfoPage from "./InfoPage";
import Loading from "./Loading";

const Home = () => {
  const { drinks, loading, loadInfoPage, loadInfo } = useContext(AppContext);

  return (
    <>
      <h1 className="h1Home">Vodka</h1>
      {loadInfoPage && <InfoPage />}
      {loading ? (
        <Loading />
      ) : (
        <div className="containers">
          {drinks.drinks.map((item) => {
            const { strDrink, strDrinkThumb, idDrink } = item;
            return (
              <div className="container" key={idDrink}>
                <h2 className="containerTitle">{strDrink}</h2>
                <img className="containerImage" src={strDrinkThumb} alt="" />
                <button
                  className="containerButton"
                  onClick={() => loadInfo(strDrink, strDrinkThumb)}
                >
                  more info
                </button>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Home;
