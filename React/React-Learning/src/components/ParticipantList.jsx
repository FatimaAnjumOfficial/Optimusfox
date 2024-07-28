import React from "react";
import Card from "./Card";
import { useState, useEffect } from "react";
import axios from "axios";

const ParticipantList = () => {
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/participants")
      .then((response) => {
        setParticipants(response.data); //client k browser ko send kr rha  data
      })
      .catch((error) => {
        console.error("Error fetching participants:", error);
      });
  }, []);

  return (
    <div className="participant-list">
      {participants.map((participant) => (
        <Card participant={participant} />
      ))}
    </div>
  );
};

export default ParticipantList;
