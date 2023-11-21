import React, {useState} from 'react';
import axios from 'axios';
import '../cadastro/cadastro.css';
import Logo from "../logo/logo";
import { Link } from "react-router-dom";



 function Medico() {

    const [formData, setFormData]  = useState({
        nome_medico: "",
        data_medico: "",
        crm_medico: "",
        endereco_medico: "",
        cpf_medico: "",
        rg_medico: "",
        email_medico: "",
        especialidade_medico: "",
        tel_medico: "",
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

    // Enviar os dados para a API

    axios.post(`http://localhost:3001/api/medico`, formData)
        .then(response => {
        // Lide com a resposta da API, como exibir uma mensagem de sucesso
            console.log('Médico cadastrado com sucesso');
        })
        .catch(error => {
            console.error('Erro ao cadastrar médico:', error);
        });
    };

    return (

        
        <div className='register'>

            <Logo />

                <form onSubmit={handleSubmit}>
                    <div>
                        <label className="cadastrar">Cadastrar Médico</label>
                    </div>

                    <div className="lineCadastro">
                        <input
                         className="nome"
                         type="text" 
                         placeholder="Nome completo" 
                         name="nome_medico" 
                         value={formData.nome_medico}
                         onChange={handleChange} 
                         required />
                        <input 
                        className="data" 
                        type="date"
                        name='data_medico'
                        value={formData.data_medico}
                        onChange={handleChange} 
                        required />
                        <input 
                        className="crm" 
                        type="text" 
                        placeholder="CRM"
                        name='crm_medico'
                        value={formData.crm_medico}
                        onChange={handleChange} 
                        required />

                        <input 
                        className="end" 
                        type="text" 
                        placeholder="Endereço"
                        name="endereco_medico"
                        value={formData.endereco_medico}
                        onChange={handleChange} 
                        required />
                        <input 
                        className="cpf" 
                        type="text" 
                        placeholder="CPF"
                        name="cpf_medico"
                        value={formData.cpf_medico}
                        onChange={handleChange} 
                        required />
                        <input 
                        className="rg" 
                        type="text" 
                        placeholder="RG"
                        name="rg_medico"
                        value={formData.rg_medico}
                        onChange={handleChange} 
                        required />

                        <input 
                        className="email" 
                        type="email" 
                        placeholder="E-mail"
                        name="email_medico"
                        value={formData.email_medico}
                        onChange={handleChange} 
                        required />
                        <input 
                        className="especialidade" 
                        type="text" 
                        placeholder="Especialidade"
                        name="especialidade_medico"
                        value={formData.especialidade_medico}
                        onChange={handleChange} 
                        required />

                        <input 
                        className="tel1" 
                        type="tel" 
                        placeholder="Telefone 1"
                        name="tel_medico"
                        value={formData.tel_medico}
                        onChange={handleChange} 
                        required />
                    </div>
                    <div>
                        <button className="btn" type="submit">Enviar</button>
                        <button className="btn" type="submit">
                            <Link to='/voltar'>Voltar</Link>
                        </button>
                    </div>
                </form>

    


            </div>
      );
}

export default Medico;