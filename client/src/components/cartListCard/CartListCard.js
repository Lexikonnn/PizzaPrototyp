import { useState } from 'react'
import './CartListCard.css';
import binIcon from '../../assets/bin.png';
import Btn from '../button/Btn';


const CartListCard = (props) => {

    const [amount, setAmount] = useState(1);

    const incrementAmount = () => {
        setAmount(amount + 1);
    };

    const decrementAmount = () => {
        if (amount > 1) {
            setAmount(amount - 1);
        }
        else{
            setAmount(amount);
        }
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
                        <Btn content="+" ui="emerald" onClick={incrementAmount} />
                        <p className='regular space'>{amount}</p>
                        <Btn content="-" ui="emerald" onClick={decrementAmount} />
                    </div>
                    <p className='regular'>{`${props.price} €`}</p>
                    <img className='bin-icon' src={binIcon} alt="bin" />
                </div>
            </div>

        </div>
    );
}

export default CartListCard;