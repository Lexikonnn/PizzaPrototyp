import { useContext } from 'react';
import "./CartButton.css";
import cartIcon from "../../assets/cart.png";
import CartCounter from "../cartCounter/CartCounter";
import { OrderedPizzasContext } from '../../contex/OrderPizzaContex';



const CartButton = () => {

    const { orderedPizzas } = useContext(OrderedPizzasContext);

    const totalItems = orderedPizzas.reduce((total, pizza) => total + pizza.amount, 0);

    return (
        <div className="cart-btn-wrapper">
            <CartCounter count={totalItems} />
            <img className="cart-icon" src={cartIcon} alt="cart" />
        </div>
    );
}

export default CartButton;