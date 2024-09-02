import Btn from '../button/Btn';
import "./PizzaCard.css";

const PizzaCard = (props) => {

    return (
        <div className='card-container'>
            <div className='img-wrapper'>
                <img className='pizza-image' src={props.image} alt="pizzamockup" />
            </div>
            <h4 className='sl-title'>{props.name}</h4>
            <div className='btn-container'>
                <Btn content={`${props.largePrice} €`} ui='emerald' onClick={() => props.onClick(props.largeId, props.name, props.image, props.largePrice, 'large')} />
                <Btn content={`${props.smallPrice} €`} ui='outline' onClick={() => props.onClick(props.smallId, props.name, props.image, props.smallPrice, 'small')} />
            </div>
        </div>
    );
}

export default PizzaCard;