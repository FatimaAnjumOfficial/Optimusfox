import React, { useEffect, useState } from "react";
import NFTCard from "../components/NFTCard";
import { LayoutContainer } from "../layout/LayoutContainer";
import { MarketPlaceHeader } from "../components/marketPlace/MarketPlaceHeader";
import { MarketPlaceFilters } from "../components/marketPlace/MarketPlaceFilters";
import { MarketPlaceSubmenu } from "../components/marketPlace/MarketPlaceSubmenu";
import { Footer } from "../layout/Footer";
import { Navbar } from "../layout/Navbar";
import "./HomePage.css";
import axios from "axios";

const HomePage = () => {
  const [nfts, setNfts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (nfts.length === 0) return <p>No data available.</p>;

  return (
    <>
      <Navbar />
      <LayoutContainer classname="nft-container">
        <MarketPlaceHeader />
        <MarketPlaceSubmenu />
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
