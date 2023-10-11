import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faReact, faJsSquare, faNodeJs, faPython, faGitAlt } from '@fortawesome/free-brands-svg-icons';

const About = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray = "About Me:".split("")
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
                        strArray={strArray}
                        idx={10}
                    />
                </h1>
                <p>I am Salem Motaz Salem Abu Hassan, a 22-year-old software engineer with a deep passion 
                    for AI-driven solutions. My expertise as a Python Engineer, which I have been working at Elevatus 
                    as since August 2023, has allowed me to develop innovative projects, including a drone control 
                    system using ROS2. My academic journey at Nottingham Trent University, pursuing a BCs Computer 
                    Science degree, has provided me with a comprehensive technical foundation. In addition to my academic 
                    accomplishments, I've had the opportunity to develop AI systems for various applications, such as 
                    chatbots, and I'm currently working on developing an AI photo stitcher for real estate platforms it my 
                    free time.</p>
                <p>My technical skills cover a wide range of programming languages including C++, HTML, CSS, SQL, Python, 
                    Java, and JavaScript. I've also gained hands-on experience with frameworks and tools like React, 
                    FastAPI, Springboot, and ROS2. I've developed a RESTful API for a web scraper that cleverly navigates 
                    through proxy services to bypass CAPTCHAs. Once this scraper collects data from a website, it's stored 
                    in a database, ensuring efficient data retrieval for subsequent requests. My expertise is further 
                    solidified by certifications from platforms like Azure and Codecademy.</p>
                <p>Beyond my professional pursuits, I'm an avid athlete. I enjoy activities like rock climbing, gym workouts, 
                    Brazilian Jiu-Jitsu (BJJ), Mixed Martial Arts (MMA), and horse riding—a sport I've dedicated over 
                    13 years to, even coming close to qualifying for the children's Olympics. Off-roading is another 
                    passion of mine, offering both adventure and the joy of camaraderie during post drive hangouts. 
                    My university years were not solely focused on academics; they were also a period of personal growth, 
                    where I acquired various skills, many of which are detailed in my CV.</p>
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
                        <li>Python FastAPI</li>
                    </ul>
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
                <div className='experience-Elevatus'>
                    <h2>Elevatus</h2>
                    <h3>August 2023 - Present</h3>
                    <p>Worked as a Python Engineer integrating third party applications into the system.</p>
                </div>
                <div className='experience-JP'>
                    <h2>JP Holdings LTD</h2>
                    <h3>July 2022 - December 2022</h3>
                    <p>Worked as a member of the hospitality and catering staff as well as IT member.</p>
                </div>
            </div>
                
        </div>
    )

}

export default About