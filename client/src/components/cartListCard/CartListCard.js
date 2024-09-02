import { useState, useContext } from 'react'
import './CartListCard.css';
import Btn from '../button/Btn';
import { OrderedPizzasContext } from '../../contex/OrderPizzaContex';


const CartListCard = (props) => {

    const { updatePizzaAmount, removePizza, priceMultiplier } = useContext(OrderedPizzasContext);
    const [amount, setAmount] = useState(props.amount);


    const incrementAmount = () => {
        setAmount(prevAmount => {
            const newAmount = prevAmount + 1;
            updatePizzaAmount(props.id, newAmount);
            return newAmount;
        });
    };

    const decrementAmount = () => {
        setAmount(prevAmount => {
            if (prevAmount > 1) {
                const newAmount = prevAmount - 1;
                updatePizzaAmount(props.id, newAmount);
                return newAmount;
            }
            return prevAmount;
        });
    };

    const handleRemovePizza = () => {
        removePizza(props.id);
    };

    return (
        <div className='order-wrapper'>
            <img className='pizza-preview' src={props.image} alt='pizza' />
            <div className='content-container'>
                <div className='text-container'>
                    <h4 className='sl-title'>{props.name}</h4>
                    <p className='small'>{props.size}</p>
                </div>
                <div className='utilities-container'>
                    <div className="amount-wrapper">
                        <Btn content="-" ui="emerald" onClick={decrementAmount} />
                        <p className='regular space'>{amount}</p>
                        <Btn content="+" ui="emerald" onClick={incrementAmount} />
                    </div>
                    <p className='regular price-wrapper'>{`${priceMultiplier(props.price, amount)} €`}</p>
                    <p className='remove-icon' onClick={handleRemovePizza}>X</p>
                </div>
            </div>

        </div>
    );
}

export default CartListCard;