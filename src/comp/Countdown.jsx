import React, { useEffect, useState } from 'react';

export default function Countdown() {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const christmas = new Date('june 10, 2024 00:00:00').getTime();
       
        setInterval(function () {
            const now = new Date().getTime();

            let distance = christmas - now;

            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor(
                (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            let minutes = Math.floor(
                (distance % (1000 * 60 * 60)) / (1000 * 60)
            );
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(days);
            setHours(hours);
            setMinutes(minutes);
            setSeconds(seconds);
        }, 1000);
    }, [days, hours, minutes, seconds]);

    return (
        <div className="time">
            <p >
                <span>
                   - {days.toString().padStart(2, '0')}
                </span><br />
                days
            </p>
            <p >
                <span >
                   - {hours.toString().padStart(2, '0')}
                </span><br />
                Hours
            </p>
            <p >
                <span >
                   - {minutes.toString().padStart(2, '0')}
                </span><br />
                minutes
            </p>
            <p >
                <span >
                  -  {seconds.toString().padStart(2, '0')}
                </span><br />
                seconds
            </p>
        </div>
    );
}
