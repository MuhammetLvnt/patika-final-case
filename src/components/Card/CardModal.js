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
        <div className="bg-black w-[1000px] h-[500px] p-6 rounded-lg flex justify-center items-center shadow-lg shadow-gray-300">
          <div className="w-32">
            <Image
              name={starshipList.name}
              className="object-scale-down w-full h-full"
            />
          </div>

          <div className="text-white mx-5 my-5 w-full grid grid-cols-5 justify-items-center gap-3 rounded-lg border-t border-gray-500  shadow-xl shadow-[#00FF00]">
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
                <div className="flex flex-col justify-center items-center">
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
