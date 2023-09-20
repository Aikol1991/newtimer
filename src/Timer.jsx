import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date());
  const [date, setDate] = useState(new Date().toDateString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentDate = new Date();
      setDate(currentDate.toDateString());
      setTime(currentDate);
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const options = {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
  };

  return (
    <div>
      <h1>Local time and date:</h1>
      <p>{time.toLocaleTimeString(undefined, options)}</p>
      <p>{date}</p>
    </div>
  );
};

export default Timer;
