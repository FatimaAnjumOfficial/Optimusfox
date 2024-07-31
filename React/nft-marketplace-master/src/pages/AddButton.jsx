import React, { useState } from "react";
import "./StylishButton.css";

function AddButton() {
  const [showModal, setShowModal] = useState(false);
  const [newNft, setNewNft] = useState({
    image: "",
    title: "",
    rank: "",
    author: "",
    price_eth: "",
    price_usd: "",
  });

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
