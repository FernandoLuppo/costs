//  CSS Styles
import style from "./Select.module.css"

//  Select JSX
function Select({text, name, options, value, handleOnChange}) {
    return (
        <div className={style.form_control}>
            <label htmlFor={name}>{text}:</label>
            <select name={name} id={name} onChange={handleOnChange} value={value || ""} >
                <option>Selecione uma opção</option>
                {options.map((options) => (
                    <option value={options.id} key={options.id}>{options.name}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;