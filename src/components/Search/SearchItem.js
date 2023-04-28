import React, { useEffect, useState } from "react";
import Image from "../Image";

function SearchItem({ starship }) {
  const [starshipFilms, setStarshipFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsPromises = starship.films.map((filmUrl) =>
        fetch(filmUrl).then((response) => response.json())
      );
      const filmsData = await Promise.all(filmsPromises);
      setStarshipFilms(filmsData);
    };

    fetchFilms();
  }, [starship]);

  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center max-w-sm mx-5 my-5">
        <Image
          name={starship.name}
          className="shadow-xl shadow-gray-300 h-64 w-72 object-scale-down rounded-lg bg-cover bg-center"
        />
        <div className="w-40 md:w-36 bg-black text-white -mt-10 shadow-lg shadow-[#FF0000] rounded-lg overflow-hidden">
          <div className="py-2 text-center font-bold uppercase tracking-wide font-bruno">
            Starship Name
          </div>
          <div className="flex items-center justify-center py-2 px-3 bg-gray-400">
            <h1 className="font-bruno text-xs text-white px-2 py-1 font-semibold rounded uppercase">
              {starship.name}
            </h1>
          </div>
        </div>
      </div>
      <div className="text-white mx-5 my-5 w-[1100px] grid grid-cols-5 justify-items-center gap-3 rounded-lg border-t border-gray-500  shadow-xl shadow-[#0077FF]">
        <div className="flex flex-col justify-center items-center ml-5 font-bruno">
          <div>Model</div>
          <div className="text-center text-gray-500">{starship.model}</div>
        </div>

        <div className="text-white flex flex-col justify-center items-center font-bruno">
          <div>Length</div>
          <div className="text-gray-500">{starship.length}</div>
        </div>
        <div className="text-white font-bruno flex flex-col justify-center items-center">
          <div>Hyperdrive Rating</div>
          <div className="text-gray-500">{starship.hyperdrive_rating}</div>
        </div>
        <div className="text-white font-bruno flex flex-col justify-center items-center">
          <div className="flex flex-col justify-center items-center text-lg">
            Related Movies
          </div>

          {starshipFilms?.map((film) => (
            <div className="flex flex-col justify-center items-center">
              <h1 className="text-gray-500">{film.title}</h1>
              <Image className="h-14" name={film.title} />
            </div>
          ))}
        </div>
        <div className="text-white font-bruno flex flex-col justify-center items-center mr-5">
          <div className="">Cargo Capacity</div>
          <div className="text-gray-500">{starship.cargo_capacity}</div>
        </div>
      </div>
    </div>
  );
}

export default SearchItem;
