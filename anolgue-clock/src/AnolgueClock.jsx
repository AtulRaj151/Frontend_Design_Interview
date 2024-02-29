import { useEffect, useState } from "react";
import './AnolgueClock.css';

const AnolgueClock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000)

        return () => clearInterval(interval);
    }, [])


    // Calculate angles for hour, minute, and second hands
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();


    const hourDegree = (hours % 12) * 30 + minutes / 2;
    const minuteDegree = (minutes * 6) + seconds / 10;
    const secondDegree = (seconds * 6);

    return (
        <div className="anolgue-clock">
            <div
                className="hand hour-hand"
                style={{ transform: `rotate(${hourDegree}deg)` }}
            >
            </div>
            <div
                className="hand minute-hand"
                style={{ transform: `rotate(${minuteDegree}deg)` }}
            >
            </div>
            <div
                className="hand second-hand"
                style={{ transform: `rotate(${secondDegree}deg)` }}
            >
            </div>
            <div className="center"></div>
        </div>
    )

}

export default AnolgueClock;