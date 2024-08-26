import './Btn.css';

const Btn = (props) => {

    const btnClass = `btn ${props.ui === 'emerald' ? 'btn-emerald' : props.ui === 'outline' ? 'btn-outline' : props.ui === 'white' ? 'btn-white' : 'btn-none'}`;

    return (
        <button className={btnClass} ui={props.ui} onClick={props.onClick}>{props.content}</button>
    );
}

export default Btn;