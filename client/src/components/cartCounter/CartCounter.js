import './CartCounter.css';

const CartCounter = (props) => {
    return (
        <div className='counter-wrapper'>
            {props.count > 0 ? <p>{props.count}</p> : null }
        </div>

    );
}

export default CartCounter;