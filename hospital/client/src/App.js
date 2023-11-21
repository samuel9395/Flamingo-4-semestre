import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Home } from './components/telaInicial/home';
import Medico from './components/cadastro/medico';
import Enfermeiro from './components/cadastro/enfermeiro';
import Paciente from './components/cadastro/paciente';
import ConsultaMedico from './components/consulta/consultaMedico';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route path='/voltar' Component={Home} />
        <Route path='/medico' Component={Medico} />
        <Route path='/enfermeiro' Component={Enfermeiro} />
        <Route path='/paciente' Component={Paciente} />
        <Route path='/consultaMedico' Component={ConsultaMedico} />
      </Routes>
    </Router>
  );
}

export default App;
