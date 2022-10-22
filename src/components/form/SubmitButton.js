//  CSS Styles
import style from "./SubmitButton.module.css"

//  Button Submit JSX
function SubmitButton({text}) {
    return (
        <div>
            <button className={style.btn}>{text}</button>
        </div>
    );
};

export default SubmitButton;