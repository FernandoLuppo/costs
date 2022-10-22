//  Import Modules
//  Router
import {Link} from "react-router-dom"

//  CSS Styles
import style from "./LinkButton.module.css"

//  Router JSX
function LinkButton({to, text}) {
    return <Link className={style.btn} to={to}>{text}</Link>
};

export default LinkButton;