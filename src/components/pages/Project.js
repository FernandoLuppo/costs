//  Import Modules
//  ID's
import {parse, v4 as uuidv4} from "uuid"
//  Router
import {useParams} from "react-router-dom"

//  React Hook
import {useState, useEffect} from "react"

//  Components
import Loading from "../layouts/Loading"
import Container from "../layouts/Container"
import ProjectForm from "../project/ProjectForm"
import ServiceForm from "../service/ServiceForm"
import ServiceCard from "../service/ServiceCard"
import Message from "../layouts/Message"

//  CSS Style
import style from "./Project.module.css"

//  Project System
function Project() {

    const [project, setProject] = useState([])
    const [services, setServices] = useState([])
    const [showProjectForm, setShowProjectForm] = useState(false)
    const [showServiceForm, setShowServiceForm] = useState(false)
    const [message, setMessage] = useState("")
    const [type, setType] = useState("")

    //  Create routes with Id's
    const { id } = useParams()

    useEffect(() => {

        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            })
            .then(resp => resp.json())
            .then(data => {
                setProject(data)
                setServices(data.services)
            })
            .catch(error => console.log(error))
        }, 1000);

    }, [id]);

    //  Edit Project
    function editPost(project) {
        setMessage("");

        //  budget Validation
        if(project.budget < project.cost) {
            setMessage("O orçamento não pode ser menor que o custo do projeto!");
            setType("error");
            return false;
        };

        //  Add edited project to db.json
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(data => {
            setProject(data)
            setShowProjectForm(false)
            setMessage("Projeto atualizado!")
            setType("success")
        })
        .catch(error => console.log(error))

    };

    //  Create New Service
    function createService(project) {
        // last service
        const lastService = project.services[project.services.length - 1];
    
        lastService.id = uuidv4();
    
        const lastServiceCost = lastService.cost;
    
        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost);
    
        // maximum value validation
        if (newCost > parseFloat(project.budget)) {
          setMessage('Orçamento ultrapassado, verifique o valor do serviço!');
          setType('error');
          project.services.pop();
          return false;
        };

        //  Add service cost to project total cost
        project.cost = newCost;

        //  Add service to db.json
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(project)
        })
        .then(resp => resp.json())
        .then(() => setShowServiceForm(false))
        .catch(error => console.log(error))

    };

    //  Removing Service
    function removeService(id, cost) {

        const servicesUpdated = project.services.filter((service) => service.id !== id);
        const projectUpdated = project;

        projectUpdated.services = servicesUpdated;
        projectUpdated.cost = parseFloat(projectUpdated.cost) - parseFloat(cost);

        //  Removing service to db.json
        fetch(`http://localhost:5000/projects/${projectUpdated.id}`, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(projectUpdated),
          })
            .then((resp) => resp.json())
            .then((data) => {
              setProject(projectUpdated)
              setServices(servicesUpdated)
              setMessage('Serviço removido com sucesso!')
              setType("success")
            })
        .catch(error => console.log(error))

    };

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm);
    };

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm);
    };

    useEffect(() => {
        console.log(services.length);
    }, []);
    
    //  Project JSX
    return(
        <>
            {project.name ? 
                <div className={style.project_details}>
                    <Container customClass="column">
                        {message && <Message type={type} msg={message} />}
                        <div className={style.details_container}>
                            <h1>Projeto: {project.name}</h1>
                            <button className={style.btn} onClick={toggleProjectForm}>{!showProjectForm ? "Editar projeto" : "Fechar"}</button>
                            {!showProjectForm ? (
                                <div className={style.project_info}>
                                    <p>Categoria:<span> {project.category.name}</span></p>
                                    <p>Total de Orçamento:<span> R${project.budget}</span></p>
                                    <p>Total Utilizado:<span> R${project.cost}</span></p>
                                </div>
                            ) : (
                                <div className={style.project_info}>
                                    <ProjectForm handleSubmit={editPost} projectData={project} btnText="Concluir edição" />
                                </div>
                            )}
                        </div>

                        <div className={style.service_form_container}>
                            <h2>Adicione um serviço</h2>
                            <button className={style.btn} onClick={toggleServiceForm}>{!showServiceForm ? "Adicionar serviço" : "Fechar"}</button>
                            <div className={style.project_info}>
                                {showServiceForm && (<ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar Serviço"
                                    projectData={project}
                                />)}
                            </div>
                        </div>
                        <h2>Serviços</h2>
                        <Container customClass="start">
                        {services.length > 0 &&
                            services.map((service) => (
                            <ServiceCard
                                id={service.id}
                                name={service.name}
                                cost={service.cost}
                                description={service.description}
                                key={service.id}
                                handleRemove={removeService}
                            />
                            ))}
                        {services.length === 0 && <p>Não há serviços cadastrados.</p>}
                        
                        </Container>

                    </Container>
                </div>
            : <Loading />}
        </>
    );

};

export default Project;