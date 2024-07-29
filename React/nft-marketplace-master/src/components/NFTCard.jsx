import React from "react";

const NFTCard = ({ nft }) => (
  <div className="nft-card">
    <img src={nft.image} alt={nft.title} />
    <h3>{nft.title}</h3>
    <p>{nft.price_eth}</p>
    <p>{price_usd}</p>
  </div>
);

export default NFTCard;
