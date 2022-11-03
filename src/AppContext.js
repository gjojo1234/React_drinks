import React, { useEffect, useState } from "react";

const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Vodka";

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [drinks, setDrinks] = useState([]);
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
    <AppContext.Provider value={{ drinks, loading }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
