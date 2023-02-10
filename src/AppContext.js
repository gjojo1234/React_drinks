import React, { useEffect, useState } from "react";

const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
  const [loadInfoPage, setLoadInfoPage] = useState(false);
  const [oneDrink, setOneDrink] = useState({});
  const loadInfo = (strDrink, strDrinkThumb) => {
    setLoadInfoPage(true);
    setOneDrink({ drink: strDrink, images: strDrinkThumb });
  };
  function removeInfo() {
    setOneDrink({});
    setLoadInfoPage(false);
  }
  const obj = async () => {
    const resp = await fetch(url);
    const data = await resp.json();
    setLoading(false);
    setDrinks(data);
  };
  useEffect(() => {
    obj();
  }, []);
  return (
    <AppContext.Provider
      value={{ drinks, loading, loadInfo, loadInfoPage, oneDrink, removeInfo }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
