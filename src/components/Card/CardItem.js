import React, { useState } from "react";
import Image from "../Image";
import CardModal from "./CardModal";

function CardItem({ starshipList }) {
  const [cardModal, setCardModal] = useState(false);
  const onClose = () => setCardModal(false);
  return (
    <div className="flex flex-col justify-center items-center bg-black">
      <div className="group h-56 w-56 [perspective:1000px]">
        <div className="relative h-full w-full rounded-xl [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-all duration-1300">
          <div className="absolute inset-0">
            <Image
              name={starshipList?.name}
              className="h-full w-full rounded-xl object-scale-down shadow-lg shadow-[#FF0000]"
            />
          </div>
          <div className="absolute inset-0 h-full w-full rounded-xl bg-black/80 px-12 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <div className="flex min-h-full flex-col items-center justify-center">
              <h1 className="font-bruno">{starshipList?.name}</h1>
            </div>
            <div>
              <button
                onClick={() => setCardModal(true)}
                className="font-bruno hover:text-[#0077FF] hover:scale-125"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </div>
      <CardModal
        cardModal={cardModal}
        onClose={onClose}
        starshipList={starshipList}
      />
    </div>
  );
}

export default CardItem;
