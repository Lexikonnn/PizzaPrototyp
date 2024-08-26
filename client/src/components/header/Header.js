import CartButton from "../cartButton/CartButton";
import Logo from "../logotype/Logotype";
import { Link } from 'react-router-dom';

import "./Header.css"

const Header = ({ isVisible }) => {
    return (
        <div className="header-wrapper">
            <Link to='/home'><Logo isVisible={isVisible} /></Link>
            <Link to='/cart'> <CartButton /></Link>
        </div>
    );
}

export default Header;