//  CSS Styles
import style from "./Input.module.css"

//  Input JSX
function Input({type, text, name, value, placeholder, handleOnChange}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <input type={type} name={name} id={name} placeholder={placeholder} onChange={handleOnChange} value={value} />
        </div>
    );
};

export default Input;