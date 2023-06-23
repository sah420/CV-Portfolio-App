import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJsSquare, faNodeJs, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray2 = "Professional Work Experience:".split("")

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
            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faPython} color="#FFD700" />
                    </div>
                </div>
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
                        <li>MySQL</li>
                        <li>PostgreSQL</li>
                        <li>Azure</li>
                        <li>JSON</li>
                    </ul>
                </div>
                <div className='fullstack-skills-container'>
                    <h2>Fullstack Skills:</h2>
                </div>
                <div className='other-skills-container'>
                    <h2>Other Skills:</h2>
                    <ul>
                        <li>ROS2</li>
                        <li>Agile Methodologies</li>
                        <li>C++</li>
                        <li>Java</li>
                        <li>Azure AI-900</li>
                        <li>Linux</li>
                        <li>Raspberry Pi</li>    
                    </ul>
                </div>
            </div>
            <div className="work-experience">
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strArray2}
                        idx={24}
                    />
                </h1>
                <h2>JP Holdings LTD</h2>
                <p>Worked as a member of the hospitality and catering staff as well as IT member.</p>
            </div>
                
        </div>
    )

}

export default About