import React from "react";
import PropTypes from "prop-types"; // to check the type of props

const ParticipantList = ({ participants }) => {
  return (
    <div className="participant-list">
      {participants.map((participant) => (
        <div key={participant.id} className="participant-card">
          {participant.image ? (
            <img
              src={participant.image}
              alt={participant.name}
              className="participant-image"
            />
          ) : (
            <div className="participant-placeholder">
              {participant.name.charAt(0).toUpperCase()}
            </div>
          )}
          <div className="participant-name">{participant.name}</div>
        </div>
      ))}
    </div>
  );
};

ParticipantList.propTypes = {
  //sets up type validation for the ParticipantList component using PropTypes
  participants: PropTypes.arrayOf(
    //ye array k elements ko validate krta h
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default ParticipantList;
