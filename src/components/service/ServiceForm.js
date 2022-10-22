//  React Hook
import { useState } from "react"

//  Components
import Input from "../form/Input"
import SubmitButton from "../form/SubmitButton"

//  CSS Style
import style from "../project/ProjectForm.module.css"

//  ServiceForm System
function ServiceForm({handleSubmit, btnText, projectData }) {

    const [service, setService] = useState({})

    //  Submit service datas
    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    };

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value});
    };

    //  ServiceForm JSX
    return(
        <form onSubmit={submit} className={style.form}>
            <Input 
                type="text"
                text="Nome do serviço"
                name="name"
                placeholder="Insira o nome do serviço"
                handleOnChange={handleChange}
            />
            <Input 
                type="number"
                text="Custo do serviço"
                name="cost"
                placeholder="Insira o valor total"
                handleOnChange={handleChange}
            />
            <Input 
                type="text"
                text="Descrição do serviço"
                name="description"
                placeholder="Descreva o serviço"
                handleOnChange={handleChange}
            />
            <SubmitButton text={btnText} />
        </form>
    );
};

export default ServiceForm;