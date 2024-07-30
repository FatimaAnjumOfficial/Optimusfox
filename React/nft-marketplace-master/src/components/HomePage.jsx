import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { LayoutContainer } from "../layout/LayoutContainer";
import React, { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import "./StylishButton.css";
import axios from "axios";
import "./HomePage.css";

const HomePage = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newNft, setNewNft] = useState({
    image: "",
    title: "",
    rank: "",
    author: "",
    price_eth: "",
    price_usd: "",
  });

  useEffect(() => {
    const fetchNfts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/nfts");
        setNfts(response.data);
      } catch (error) {
        setError("Failed to fetch NFTs.");
      } finally {
        setLoading(false);
      }
    };

    fetchNfts();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNft((prevNft) => ({
      ...prevNft,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/nfts", newNft);
      setNewNft({
        image: "",
        title: "",
        rank: "",
        author: "",
        price_eth: "",
        price_usd: "",
      });
      setShowModal(false);
      const response = await axios.get("http://localhost:5000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to add new NFT.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (nfts.length === 0) return <p>No data available.</p>;

  return (
    <>
      <Navbar />
      <LayoutContainer classname="nft-container">
        <MarketPlaceHeader />
        <MarketPlaceSubmenu />

        <div className="home-page">
          <button onClick={() => setShowModal(true)} className="stylish-button">
            Add NFT
          </button>
          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <h2>Add New NFT</h2>
                <form onSubmit={handleSubmit}>
                  <label>
                    Image URL:
                    <input
                      type="text"
                      name="image"
                      value={newNft.image}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Title:
                    <input
                      type="text"
                      name="title"
                      value={newNft.title}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Rank:
                    <input
                      type="text"
                      name="rank"
                      value={newNft.rank}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Author:
                    <input
                      type="text"
                      name="author"
                      value={newNft.author}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Price (ETH):
                    <input
                      type="number"
                      step="0.01"
                      name="price_eth"
                      value={newNft.price_eth}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <label>
                    Price (USD):
                    <input
                      type="number"
                      step="0.01"
                      name="price_usd"
                      value={newNft.price_usd}
                      onChange={handleInputChange}
                      required
                    />
                  </label>
                  <button type="submit">Submit</button>
                </form>
              </div>
            </div>
          )}
        </div>

        <MarketPlaceFilters />

        <div className="grid xlm:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-6 gap-8">
          {nfts.map((nft) => (
            <NFTCard key={nft.rank} {...nft} />
          ))}
        </div>

        <Footer />
      </LayoutContainer>
    </>
  );
};

export default HomePage;
