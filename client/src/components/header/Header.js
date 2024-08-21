import CartButton from "../cartButton/CartButton";
import Logo from "../logotype/Logotype";
import "./Header.css"

const Header = () => {
    return (
        <div className="header-wrapper">
            <Logo />
            <CartButton />
        </div>
    );
}

export default Header;