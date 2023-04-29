import React, { useEffect, useState } from "react";
import Image from "../Image";

function CardModal({ cardModal, onClose, starshipList }) {
  const [starshipFilms, setStarshipFilms] = useState([]);

  useEffect(() => {
    const fetchFilms = async () => {
      const filmsPromises = starshipList.films.map((filmUrl) =>
        fetch(filmUrl).then((response) => response.json())
      );
      const filmsData = await Promise.all(filmsPromises);
      setStarshipFilms(filmsData);
    };

    fetchFilms();
  }, [starshipList]);

  if (!cardModal) return null;

  return (
    <div>
      <div
        onClick={onClose}
        className="flex items-center justify-center fixed inset-0 z-50"
      >
        <div className="bg-black md:w-[1000px] md:h-[500px] md:p-6 md:rounded-lg md:flex justify-center items-center md:shadow-lg md:shadow-gray-300 shadow-none">
          <div className="md:w-32 md:shadow-none w-24 shadow-blue-800 shadow-md">
            <Image
              name={starshipList.name}
              className="object-scale-down w-full h-full"
            />
          </div>

          <div className="text-white md:mx-5 md:my-5 md:w-full md:grid md:grid-cols-5 md:justify-items-center md:gap-3 rounded-lg border-t border-gray-500  shadow-xl shadow-[#00FF00] space-y-5">
            <div className="flex flex-col justify-center items-center ml-5 font-bruno text-center">
              <div>Model</div>
              <div className="text-gray-500 text-sm">{starshipList.model}</div>
            </div>

            <div className="text-white flex flex-col justify-center items-center font-bruno text-center">
              <div>Length</div>
              <div className="text-gray-500 text-sm">{starshipList.length}</div>
            </div>
            <div className="text-white font-bruno flex flex-col justify-center items-center text-center">
              <div>Hyperdrive Rating</div>
              <div className="text-gray-500 text-sm">
                {starshipList.hyperdrive_rating}
              </div>
            </div>
            <div className="text-white font-bruno flex flex-col justify-center items-center text-center">
              <div className="flex flex-col justify-center items-center text-lg">
                Related Movies
              </div>

              {starshipFilms?.map((film) => (
                <div className="flex flex-col justify-center items-center mb-3">
                  <h1 className="text-gray-500 text-sm">{film.title}</h1>
                  <Image className="h-14" name={film.title} />
                </div>
              ))}
            </div>
            <div className="text-white font-bruno flex flex-col justify-center items-center mr-5 text-center">
              <div className="">Cargo Capacity</div>
              <div className="text-gray-500 text-sm">
                {starshipList.cargo_capacity}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardModal;
