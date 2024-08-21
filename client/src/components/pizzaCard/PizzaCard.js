import Btn from '../button/Btn';
import "./PizzaCard.css";

const PizzaCard = (props) => {
    return (
        <div className='card-container'>
            <div className='img-wrapper'>
                <img className='pizza-image' src={props.image} alt="pizza" />
            </div>
            <h4 className='sl-title'>{props.name}</h4>
            <div className='btn-container'>
                <Btn content={`${props.largePrice} €`} type='emerald' />
                <Btn content={`${props.smallPrice} €`} type='outline' />
            </div>
        </div>
    );
}

export default PizzaCard;