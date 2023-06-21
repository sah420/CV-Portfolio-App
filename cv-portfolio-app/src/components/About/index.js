import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e', ':']}
                        idx={15}
                    />
                </h1>
                <p>Paragraph 1: Intro</p>
                <p>Paragraph 2: Skills</p>
                <p>Paragraph 3: Interests</p>
            </div>
            <div className='skills-container'>
                <div className='frontend-skills-container'>
                    <h2>Frontend Skills:</h2>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>React</li>
                    </ul>
                </div>
                <div className='backend-skills-container'>
                    <h2>Backend Skills:</h2>
                    <ul>
                        <li>SQL</li>
                        
                    </ul>
                </div>
                <div className='fullstack-skills-container'>
                    <h2>Fullstack Skills:</h2>
                </div>
                <div className='other-skills-container'>
                    <h2>Other Skills:</h2>
                </div>
            </div>
        </div>
    )

}

export default About