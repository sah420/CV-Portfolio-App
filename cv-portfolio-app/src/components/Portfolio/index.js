import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';


const Portfolio = () => {
    
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray = "Coming Soon!".split("")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Calculate the time left until the end date
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = +new Date('2023-11-30 00:00:00') - +now;

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        
        return timeLeft;
    };

    // Update the time left every second
    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className='portfolio-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strArray}
                        idx={10}
                    />
                </h1>
                <div className='countdown-timer'>
                    <span>{timeLeft.days} :</span>
                    <span>{timeLeft.hours} :</span>
                    <span>{timeLeft.minutes} :</span>
                    <span>{timeLeft.seconds}</span>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;