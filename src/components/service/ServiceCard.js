//  Import Modules
//  Icons
import {BsFillTrashFill} from "react-icons/bs"

//  CSS Style
import style from "../project/ProjectCard.module.css"

//  ServiceCard System
function ServiceCard({id, name, cost, description, handleRemove}) {

    //  Remove service
    function remove(e) {
        e.preventDefault();
        handleRemove(id, cost);
    };

    //  ServiceCard JSX
    return(
        <div className={style.project_card}>
            <h4>{name}</h4>
            <p><span>Custos total:</span> R${cost}</p>
            <p>{description}</p>
            <div className={style.project_card_actions}>
                <button onClick={remove}>
                    <BsFillTrashFill />
                    Excluir
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;