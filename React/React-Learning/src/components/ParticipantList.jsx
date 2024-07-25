import React from "react";
import Card from "./Card";

const ParticipantList = ({ participants }) => {
  return (
    <div className="participant-list">
      {participants.map((participant) => (
        <Card participant={participant} />
      ))}
    </div>
  );
};

export default ParticipantList;
