//  Save Image
import savings from "../../img/savings.svg"

//  CSS Style
import style from "./Home.module.css"

//  Components
import LinkButton from "../layouts/LinkButton";

//  Home JSX
function Home() {
    return(
        <section className={style.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora!</p>
            <LinkButton to="/newproject"  text="Criar Projeto" />
            <img src={savings} alt="Costs" />
        </section>
    );
};

export default Home;