import "./Footer.css";
import gitIcon from '../../assets/git.png';
import { Link } from 'react-router-dom';


const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Link to='https://github.com/Lexikonnn'>
                <img className="git-icon" src={gitIcon} alt="git" />
            </Link>
            <p>© 2024</p>
        </div>
    );
}

export default Footer;