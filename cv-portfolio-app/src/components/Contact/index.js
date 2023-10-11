import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { useEffect, useState } from 'react';


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const strArray = "Contact Me:".split("")

    useEffect(() => {
        setTimeout(() => {
            return setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        company_name: '',
        subject: '',
        email: '',
        message: ''
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('https://portfolio-backend-updated-s2zog.ondigitalocean.app/messages/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                // Handle successful response
                console.log('Successfully sent data');
            } else {
                // Handle errors
                console.log('Failed to send data');
            }
        } catch (error) {
            console.log('An error occurred', error);
        }
    };

    // Update state whenever an input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => {
            const newState = { ...prevState, [name]: value };
            console.log('Updated state:', newState);  
            return newState;
        });
    };

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={strArray}
                        idx={10}
                    />
                </h1>
                <p>
                    I am open to any freelance opportunities, especially large and ambitious
                    projects. However, if you have any offers, requests, or questions please
                    feel free to reach out and ask using the below form. My response time
                    will be between 1-3 buisness days.
                </p>
                <div className='contact-form'>
                    <form onSubmit={handleSubmit}>
                        <ul>
                            <li className='half'>
                                <input type='text' name='first_name' placeholder='First Name' required onChange={handleInputChange}/>
                            </li>
                            <li className='half'>
                                <input type='text' name='last_name' placeholder='Last Name' required onChange={handleInputChange}/>
                            </li>
                            <li className='half2 no-margin'>
                                <input type='text' name='company_name' placeholder='Company Name' required onChange={handleInputChange}/>
                            </li>
                            <li className='half2'>
                                <select name='subject' required onChange={handleInputChange}>
                                    <option value='' disabled selected>Select a Subject</option>
                                    <option value='Questions'>Questions</option>
                                    <option value='Freelancing'>Freelancing</option>
                                    <option value='Offer'>Offer</option>
                                    <option value='Interview'>Interview</option>
                                </select>
                            </li>
                            <li>
                                <input type='text' name='email' placeholder='Email' required onChange={handleInputChange}/>
                            </li>
                            <li>
                                <textarea name='message' placeholder='Message' required onChange={handleInputChange}/>
                            </li>
                            <li>
                                <input type='submit' className='flat-button' value='Send' />
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
        
    )
}

export default Contact