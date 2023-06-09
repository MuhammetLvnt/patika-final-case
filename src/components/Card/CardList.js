import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function CardList() {
  const [starshipsList, setStarshipsList] = useState([]);
  const [starshipsData, setStarshipsData] = useState({});
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/starships/?page=${page}`)
      .then((res) => {
        setStarshipsData(res.data);
        if (page === 1) {
          // ilk 10 veriyi listeledik
          setStarshipsList(res.data.results);
        } else {
          // butona tıkladığımızda eski verilerin üstüne yeni verileri ekledik.
          setStarshipsList([...starshipsList, ...res.data.results]);
        }
      })
      .catch((err) => console.log(err));
  }, [page]);

  const newItemsRef = useRef(null);
  // yeni açılan verilerin focuslanması için eklendi
  useEffect(() => {
    if (newItemsRef.current) {
      newItemsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [starshipsList]);

  return (
    <div className="h-screen text-white">
      <header className="md:flex md:flex-col md:justify-center md:items-center flex flex-col justify-center items-center">
        <div className="text-white font-bruno uppercase text-xl font-semibold mt-5">
          Starship
        </div>
        <div className="flex justify-around items-center w-full">
          <Link to="/" className="text-white font-bruno w-1/2 text-center">
            Home Page
          </Link>
          <Search />
        </div>
      </header>
      <div className="md:grid md:grid-cols-5 md:gap-5 md::mx-5 md:mt-10 mt-5 space-y-8">
        {starshipsList?.map((starshipList, index) => (
          <CardItem starshipList={starshipList} key={index} />
        ))}
        <div ref={newItemsRef} />
      </div>

      {starshipsData.next ? (
        <div className="flex justify-center items-center mt-5">
          <button
            onClick={() => setPage(page + 1)}
            className="text-white mb-5 font-bruno"
          >
            Load more
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default CardList;
