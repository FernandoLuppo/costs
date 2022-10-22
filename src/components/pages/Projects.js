//  Import Modules
//  Router
import { useLocation } from "react-router-dom";

//  React Hook
import { useEffect, useState } from "react";

//  Components
import Message from "../layouts/Message";
import Container from "../layouts/Container"
import LinkButton from "../layouts/LinkButton";
import ProjectCard from "../project/ProjectCard";
import Loading from "../layouts/Loading";

//  CSS Style
import style from "./Projects.module.css"

//  Projects System
function Projects() {

    const [projects, setProjects] = useState([])
    const [removeLoading, setRemoveLoading] = useState(false)
    const [projectMessage, setProjectMessage] = useState("")

    const location = useLocation();

    let message = ""
    if(location.state) {
        message = location.state.message
    };

    //  Loader animations and load datas
    useEffect(() => {
        setTimeout(() => {
            fetch("http://localhost:5000/projects", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(resp => resp.json())
            .then(data => {
                setProjects(data)
                setRemoveLoading(true)
            }).catch(error => console.log(error))
        }, 1000);
    }, []);

    function removeProject(id) {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application",
            },
        })
        .then(resp => resp.json())
        .then(() => {
            setProjects(projects.filter(project => project.id !== id))
            setProjectMessage("Projeto removido com sucesso!")
        })
        .catch(error => console.log(error))
    };


    //  Projects JSX
    return(
        <div className={style.project_container}>
            <div className={style.title_container}>
                <h1>Meus Projetos</h1>
                <LinkButton to="/newproject"  text="Criar Projeto" />
            </div>
            {message && (<Message type="success" msg={message} />)}
            {projectMessage && (<Message type="error" msg={projectMessage} />)}

            <Container customClass="start">

            {projects.length > 0 ?
                projects.map((project) => (
                    <ProjectCard
                        id={project.id}
                        name={project.name}
                        budget={project.budget}
                        category={project.category.name}
                        key={project.id}
                        handleRemove={removeProject}
                    />
                ))
                : <Loading />
            }
        
            {removeLoading && projects.length === 0 && (
                <p>Não há projetos cadastrados!</p>
            )}

            </Container>
        </div>
    );
};

export default Projects;