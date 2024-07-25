import React from "react";
import Card from "./Card";
import PropTypes from "prop-types"; // to check the type of props

const ParticipantList = ({ participants }) => {
  return (
    <div className="participant-list">
      {participants.map((participant) => (
        <Card participant={participant} />
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
