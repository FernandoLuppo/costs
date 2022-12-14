//  React Hook
import { useEffect, useState } from "react";

//  Components
import Input from "../form/Input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton"

//  CSS Style
import style from "./ProjectForm.module.css"

//  ProjectForm System
function ProjectForm({btnText, handleSubmit, projectData}) {

    const [categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || {})
    
    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
        .then((resp) => resp.json())
        .then((data) => setCategories(data))
        .catch((error) => console.log(error))
    
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);

    };

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value});
    };

    function handleCategory(e) {
        setProject({ ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        });
    };

    //  ProjectForm JSX
    return(
        <form onSubmit={submit} className={style.form}>
            <Input 
                type="text" 
                name="name" 
                id="name" 
                placeholder="Insira o nome do projeto" 
                text="Nome do projeto" 
                handleOnChange={handleChange} 
                value={project.name ? project.name : ""}
            />
            <Input 
                type="number" 
                name="budget" 
                id="budget" 
                placeholder="Insira o orçamento total" 
                text="Orçamento do projeto" 
                handleOnChange={handleChange}
                value={project.budget ? project.budget : ""}
            />
            <Select 
                name="category_id" 
                text="Selecione a categoria" 
                options={categories} 
                handleOnChange={handleCategory} 
                value={project.category ? project.category.id : ""}
            />

            <SubmitButton text={btnText} />
        </form>
    );
};

export default ProjectForm;