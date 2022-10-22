//  Import Modules
//  Router
import { useHistory } from "react-router-dom";

//  Components
import ProjectForm from "../project/ProjectForm";

//  CSS Style
import style from "./NewProject.module.css"

//  NewProject System
function NewProject() {

    //  Router method to send infos for db.json
    const history = useHistory();

    function createPost(project) {
        //  Inicialize cost and service
        project.cost = 0;
        project.services = [];

        //  Sending infos to db.json
        fetch("http://localhost:5000/projects", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            history.push("/projects", {message: "Projeto criado com sucesso!"})
        })
        .catch(error => console.log(error))

    };

    //  NewProject JSX
    return(
        <div className={style.newproject_container}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar so serviços</p>
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
};

export default NewProject;