import LogoTitle from '../../assets/images/logo-s.png';
import Cv from '../../assets/files/Salem_Abu_Hassan_CV.pdf';
import { Link } from 'react-router-dom';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useState } from 'react';
import Logo from './Logo'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a', 'l', 'e', 'm', ' ', 'A', 'b', 'u', ' ', 'H', 'a', 's', 's', 'a', 'n']
    const jobArray = ['S', 'o', 'f', 't', 'w', 'a', 'r', 'e', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r']

    
    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 6000)
    }, [])

    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i</span>
                <span className={`${letterClass} _13`}>,</span>
                <br />
                <span className={`${letterClass} _14`}>I</span>
                <span className={`${letterClass} _15`}>'</span>
                <span className={`${letterClass} _16`}>m</span>
                <img src={LogoTitle} alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={24} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={39} />
                </h1>
                <h2>Fullstack Developer / Software Developer / AI Developer</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
                <a href={Cv} download className='flat-button'>Download CV</a>
            </div>
            <Logo />
        </div>
    );
}

export default Home