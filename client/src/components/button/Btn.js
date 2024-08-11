import './Btn.css';

const Btn = (props) => {

    const btnClass = `btn ${props.type === 'emerald' ? 'btn-emerald' : props.type === 'outline' ? 'btn-outline' : 'btn-none'}`;

    return (
        <button className={btnClass} type={props.type} onClick={props.onClick}>{props.content}</button>
    );
}

export default Btn;