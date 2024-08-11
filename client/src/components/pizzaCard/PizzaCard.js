import Btn from '../button/Btn';

const PizzaCard = (props) => {
    return (
        <div className='card-container'>
            <div className='img-wrapper'>

            </div>
            <h4>{props.name}</h4>
            <div>
                <Btn content={`${props.largePrice} €`} type='emerald' />
                <Btn content={`${props.smallPrice} €`} type='outline' />
            </div>
        </div>
    );
}

export default PizzaCard;