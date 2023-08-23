import React, { useState, useEffect } from 'react';

function CountDown({days, hours, minutes}) {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + days);
    targetDate.setHours(targetDate.getHours() + hours);
    targetDate.setMinutes(targetDate.getMinutes() + minutes);

    const [timeRemaining, setTimeRemaining] = useState(getTimeRemaining(targetDate));

    useEffect(() => {
        const countdownInterval = setInterval(() => {
            const newTimeRemaining = getTimeRemaining(targetDate);
            if (newTimeRemaining.total <= 0) {
                clearInterval(countdownInterval);
            }
            setTimeRemaining(newTimeRemaining);
        }, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, []);

    function getTimeRemaining(targetDate) {
        const now = new Date();
        const timeDifference = targetDate - now;

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return {
            total: timeDifference,
            days,
            hours,
            minutes,
            seconds
        };
    }

    return (
        <>
            {timeRemaining.total > 0 ? (
                <div>
                    <p>Ends in {timeRemaining.days} days {timeRemaining.hours} hrs {timeRemaining.minutes} mins {timeRemaining.seconds} secs</p>
                </div>
            ) : (
                <p>Time end </p>
            )}
        </>
    );
}

export default CountDown;
