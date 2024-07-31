import React, { useState } from "react";
import axios from "axios"; // Import axios for making HTTP requests
import "./StylishButton.css";

function AddButton({ setNfts }) {
  const [showModal, setShowModal] = useState(false);
  const [newNft, setNewNft] = useState({
    image: "",
    title: "",
    rank: "",
    author: "",
    price_eth: "",
    price_usd: "",
  });
  const [error, setError] = useState("");

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

      // Fetch updated NFTs from the server and update state
      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to add new NFT.");
    }
  };

  return (
    <div className="button-container">
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
            {error && <p className="error">{error}</p>}
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
              <button type="submit" className="submit-button">
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
