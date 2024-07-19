import React, { useState, useEffect } from "react";
import "./Timer.css";

const Timer = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endDate) - +new Date(); //difference between endDate and currentDate
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)), //1000 for miliseconds
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [endDate]);

  return (
    <div className="timer">
      <div className="time-box">
        <span className="time-value">{timeLeft.days}</span>
        <span className="time-label">days</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.hours}</span>
        <span className="time-label">hours</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.minutes}</span>
        <span className="time-label">minutes</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.seconds}</span>
        <span className="time-label">seconds</span>
      </div>
    </div>
  );
};

export default Timer;
