import React, { useState } from "react";
import axios from "axios";
import "./StylishButton.css";

function Button({ setNfts }) {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [newNft, setNewNft] = useState({
    image: "",
    title: "",
    rank: "",
    author: "",
    price_eth: "",
    price_usd: "",
  });
  const [error, setError] = useState("");
  const [idToEdit, setIdToEdit] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewNft((prevNft) => ({
      ...prevNft,
      [name]: value,
    }));
  };

  const handleFetchNft = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4000/nfts/${idToEdit}`
      );
      setNewNft(response.data);
      setIsEditing(true);
    } catch (error) {
      setError("Failed to fetch NFT data.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await axios.put(`http://localhost:4000/nfts/${idToEdit}`, newNft);
      } else {
        await axios.post("http://localhost:4000/nfts", newNft);
      }

      setNewNft({
        image: "",
        title: "",
        rank: "",
        author: "",
        price_eth: "",
        price_usd: "",
      });
      setShowModal(false);
      setIsEditing(false);
      setIdToEdit("");

      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to save NFT.");
    }
  };

  return (
    <div className="button-container">
      <button onClick={() => setShowModal(true)} className="stylish-button">
        Add NFT
      </button>
      <button
        onClick={() => {
          setShowModal(true);
          setIsEditing(true);
        }}
        className="stylish-button"
      >
        Edit NFT
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>{isEditing ? "Edit NFT" : "Add New NFT"}</h2>
            {error && <p className="error">{error}</p>}
            {isEditing && (
              <div>
                <label>
                  NFT ID:
                  <input
                    type="text"
                    value={idToEdit}
                    onChange={(e) => setIdToEdit(e.target.value)}
                  />
                  <br />
                  <br />
                  <button
                    type="button"
                    onClick={handleFetchNft}
                    className="fetch-button"
                  >
                    Fetch Data
                  </button>
                </label>
              </div>
            )}
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
                {isEditing ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Button;
