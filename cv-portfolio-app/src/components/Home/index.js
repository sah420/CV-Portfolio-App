import LogoTitle from '../../assets/images/logo-s.png';
import Cv from '../../assets/files/Salem_Abu_Hassan_CV.pdf';
import { Link } from 'react-router-dom';
import './index.scss';

const Home = () => {
    


    return (
        <div className='container home-page'>
            <div className="text-zone">
                <h1>Hi, <br /> I'm   
                <img src={LogoTitle} alt="developer" />
                alem Abu Hassan
                <br />
                Software Developer
                </h1>
                <h2>Fullstack Developer / Software Developer / AI Developer</h2>
                <Link to='/contact' className='flat-button'>Contact Me</Link>
                <a href={Cv} download className='flat-button'>Download CV</a>
            </div>
        </div>
    );
}

export default Home