import "./CartButton.css";
import cartIcon from "../../assets/cart.png";


const CartButton = () => {
    return ( 
        <div className="cart-btn-wrapper">
            <img className="cart-icon" src={cartIcon} alt="cart" />
        </div>
     );
}
 
export default CartButton;