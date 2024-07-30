import React from "react";
import "./NFTCard.css";

const NFTCard = ({ image, title, rank, author, price_eth, price_usd }) => {
  return (
    <div className="card border border-secondary-border rounded-xl border-solid p-2">
      <div>
        <img src={image} alt={title} className="w-full max-h-[350px]" />
      </div>
      <div className="pt-2 flex flex-col gap-1">
        <span className="text-sm text-[#A1A1AA]">{title}</span>
        <h1>{rank}</h1>
      </div>
      <div className="py-2 mt-3 flex justify-between rounded-xl px-3 bg-zinc-800 items-center">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Author</span>
          <div className="text-sm xl:text-base flex gap-1">
            <p>{author}</p>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-[#A1A1AA]">Price</span>
          <div className="text-sm xl:text-base flex gap-1 items-center">
            <div className="flex gap-1">
              <p>{price_eth}</p>
              <span>ETH</span>
            </div>
            <span className="text-[#A1A1AA] text-xs">${price_usd}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTCard;
