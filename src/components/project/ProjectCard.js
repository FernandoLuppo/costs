//  Import Modules
//  Router
import { Link } from "react-router-dom";
//  Icons
import {BsPencil, BsFillTrashFill} from "react-icons/bs"

//  CSS Style
import style from "./ProjectCard.module.css"

//  ProjectCard System
function ProjectCard({id, name, budget, category, handleRemove}) {

    //  Remove project
    const remove = (e) => {
        e.preventDefault()
        handleRemove(id)
    };

    //  ProjectCard JSX
    return(
        <div className={style.project_card}>
            <h4>{name}</h4>
            <p>
                <span>Orçamento:</span> R${budget}
            </p>
            <p className={style.category_text}>
                <span className={`${style[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={style.project_card_actions}>
                <Link to={`/Project/${id}`}>
                    <BsPencil /> Edição
                </Link>
                <button onClick={remove}>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;