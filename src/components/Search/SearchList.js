import React from "react";
import SearchItem from "./SearchItem";
import { useStarship } from "../../contexts/StarshipsContext";
import { Link } from "react-router-dom";

function SearchList() {
  const { starships } = useStarship();

  return (
    <div className="grid place-content-start">
      <header className="flex flex-col justify-around items-center">
        <div className="text-white uppercase text-2xl font-bold font-bruno mt-5">
          Details
        </div>
        <Link to="/" className="text-white font-bruno hover:underline">
          Home Page
        </Link>
      </header>
      {starships?.map((starship, index) => (
        <SearchItem key={index} starship={starship} />
      ))}
    </div>
  );
}

export default SearchList;
