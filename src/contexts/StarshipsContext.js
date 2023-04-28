import { createContext, useState, useContext } from "react";

const StarshipsContext = createContext();

export const StarshipsContextProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [starships, setStarships] = useState([]);

  const values = {
    setSearch,
    setStarships,
    search,
    starships,
  };
  return (
    <StarshipsContext.Provider value={values}>
      {children}
    </StarshipsContext.Provider>
  );
};
export const useStarship = () => {
  const context = useContext(StarshipsContext);

  if (context === undefined) {
    throw new Error("useStarship must be used withing a StarshipProvider");
  }
  return context;
};
