import React from "react";
import '../cadastro/cadastro.css';
import Logo from "../logo/logo";
import { Link } from "react-router-dom";

function Enfermeiro(){
    return (

        
        <div className='register'>

            <Logo />

                <form>
                    <div>
                        <label className="cadastrar">Cadastrar Enfermeiro</label>
                    </div>
                    <div className="lineCadastro">
                        <input className="nome" type="text" placeholder="Nome completo" required="" />
                        <input className="data" type="date" placeholder="" required="" />
                        <input className="cip" type="text" placeholder="CIP" required="" />

                        <input className="end" type="text" placeholder="Endereço" required="" />
                        <input className="cpf" type="text" placeholder="CPF" required="" />
                        <input className="rg" type="text" placeholder="RG" required="" />

                        <input className="email" type="email" placeholder="E-mail" required="" />
                        <input className="especialidade" type="text" placeholder="Especialidade" required="" />

                        <input className="tel1" type="tel" placeholder="Telefone 1" />
                        <input className="tel2" type="tel" placeholder="Telefone 2" />
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

export default Enfermeiro;