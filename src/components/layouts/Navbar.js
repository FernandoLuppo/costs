//  Import Modules
//  Router
import { Link } from "react-router-dom";

//  Logo Image
import logo from "../../img/costs_logo.png";

//  Components
import Container from "./Container";

//  CSS Style
import style from "./Navbar.module.css";

//  Navbar JSX
function Navbar() {
    return(
        <nav className={style.navbar}>
            <Container>
                <Link to="/"><img src={logo} alt="Costs" /></Link>
                <ul className={style.list}>
                    <li className={style.item}><Link to="/">Home</Link></li>
                    <li className={style.item}><Link to="/projects">Projeto</Link></li>
                    <li className={style.item}><Link to="/newproject">Novo Projeto</Link></li>
                    <li className={style.item}><Link to="/company">Empresa</Link></li>
                    <li className={style.item}><Link to="/contact">Contato</Link></li>
                </ul>
            </Container>
        </nav>
    );
};

export default Navbar;