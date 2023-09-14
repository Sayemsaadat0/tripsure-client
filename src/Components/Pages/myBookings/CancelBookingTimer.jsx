import React, { useState, useEffect } from 'react';

function CancelBookinTimer() {
  const givenDateString = "Mon Sep 11 2023 16:10:29 GMT+0600 (Bangladesh Standard Time)";
  const targetDate = new Date(givenDateString);
  targetDate.setHours(targetDate.getHours() + 24);

  const [timeRemaining, setTimeRemaining] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        // Countdown has expired
        clearInterval(intervalId);
        setTimeRemaining({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(timeDifference / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
        setTimeRemaining({ hours, minutes, seconds });
      }
    }, 1000);

    // Clean up the interval when the component unmounts
    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  return (
    <div>
      {timeRemaining.hours === 0 && timeRemaining.minutes === 0 && timeRemaining.seconds === 0 ? (
        <p>already expired cancel time</p>
      ) : (
        <p>
          Countdown: {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s
        </p>
      )}
    </div>
  );
}

export default CancelBookinTimer;
