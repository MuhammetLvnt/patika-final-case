import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useStarship } from "../../contexts/StarshipsContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Search() {
  const [searchModal, setSearchModal] = useState(true);
  const { setSearch, setStarships, search } = useStarship();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios
      .get(`https://swapi.dev/api/starships/?search=${search}`)
      .then((res) => setStarships(res.data.results))
      .catch((err) => console.log(err));
    setSearch("");
    navigate("/searchList");
  };

  return (
    <div className="w-1/2 flex justify-center items-center">
      <form onSubmit={handleSubmit}>
        {searchModal ? (
          <div>
            <button
              className="flex justify-center items-center hover:scale-110"
              onClick={() => setSearchModal(false)}
            >
              <FiSearch size={16} />
              <label className="ml-2 font-bruno">Search</label>
            </button>
          </div>
        ) : (
          <div className="relative h-8">
            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="block border rounded-md md:w-72 h-7 p-4 pl-10 text-sm w-44 bg-black placeholder:font-bruno"
              placeholder="Search "
            />
            <FiSearch size={18} className="absolute bottom-[7px] ml-3" />
            <svg
              onClick={() => setSearchModal(true)}
              className="absolute bottom-2 right-2.5"
              enableBackground="new -1.301 -0.015 17.553 14.978"
              height="14.978"
              viewBox="-1.301 -.015 17.553 14.978"
              width="17.553"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" stroke="#fff" strokeWidth="2">
                <path d="m1 1 13 13"></path>
                <path d="m14 1-13 13"></path>
              </g>
            </svg>
          </div>
        )}
      </form>
    </div>
  );
}

export default Search;
