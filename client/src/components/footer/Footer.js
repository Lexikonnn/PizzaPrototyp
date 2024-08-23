import "./Footer.css";
import gitIcon from '../../assets/git.png';

const Footer = () => {
    return ( 
        <div className="footer-wrapper">
            <img className="git-icon" src={gitIcon} alt="git" />
            <p>© 2024</p>
        </div>
     );
}
 
export default Footer;