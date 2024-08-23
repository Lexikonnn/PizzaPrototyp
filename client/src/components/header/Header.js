import CartButton from "../cartButton/CartButton";
import Logo from "../logotype/Logotype";
import "./Header.css"

const Header = ({isVisible}) => {
    return (
        <div className="header-wrapper">
            <Logo isVisible={isVisible}/>
            <CartButton />
        </div>
    );
}

export default Header;