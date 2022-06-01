import "../componets/css/Button.css";

const Button = ({ value, onClick, className }) => {
    return (
        <button className={className} onClick={onClick}>

        {value}
        </button>
    );
    };

    export default Button;