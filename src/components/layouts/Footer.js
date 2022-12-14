//  Import Modules
//  Icons
import {FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa";

//  CSS Styles
import style from "./Footer.module.css"

//  Footer JSX
function Footer() {
    return(
        <footer className={style.footer}>
            <ul className={style.social_list}>
                <li>
                    <FaFacebook />
                </li>
                <li>
                    <FaInstagram />
                </li>
                <li>
                    <FaLinkedin />
                </li>
            </ul>
            <p className={style.copy_right}><span>Costs</span>&copy; 2022</p>
        </footer>
    );
};

export default Footer;