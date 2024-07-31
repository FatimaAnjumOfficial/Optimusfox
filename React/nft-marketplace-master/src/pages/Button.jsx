import React, { useState } from "react";
import axios from "axios";
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
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState("");

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
      if (editMode) {
        await axios.put(`http://localhost:4000/nfts/${editId}`, newNft);
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
      setEditMode(false);
      setEditId("");

      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to process request.");
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.get(`http://localhost:4000/nfts/${editId}`);
      setNewNft(response.data);
      setEditMode(true);
      setShowModal(true);
    } catch (error) {
      setError("Failed to fetch NFT.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4000/nfts/${editId}`);
      setEditMode(false);
      setEditId("");
      setShowModal(false);

      const response = await axios.get("http://localhost:4000/nfts");
      setNfts(response.data);
    } catch (error) {
      setError("Failed to delete NFT.");
    }
  };

  return (
    <div className="button-container">
      <button onClick={() => setShowModal(true)} className="stylish-button">
        Add NFT
      </button>
      <input
        type="text"
        placeholder="Enter NFT ID for Edit/Delete"
        value={editId}
        onChange={(e) => setEditId(e.target.value)}
      />
      <button onClick={handleEdit} className="stylish-button">
        Edit NFT
      </button>
      <button onClick={handleDelete} className="stylish-button">
        Delete NFT
      </button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>{editMode ? "Edit NFT" : "Add New NFT"}</h2>
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
                {editMode ? "Update" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddButton;
