const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user:'root',
  database:'hospital_db'
});

// Conectar ao banco de dados
db.connect(err => {
  if (err) {
    console.error('Erro na conexão com o banco de dados:', err);
    return;
  }
  console.log('Conectado ao Banco de dados');
});

// Middleware para analisar o corpo das solicitações
app.use(bodyParser.json());

// Middleware para permitir solicitações CORS
app.use(cors());

// Rota para consulta de médicos
app.get(`/api/medico`, (req, res) => {
  const consultaMedico = 'SELECT *FROM medico';

  db.query(consultaMedico, (error, results) => {
    if(error) {
      console.error('Erro na consulta do banco de dados:', error);
      res.status(500).json({error: 'Erro ao obter médicos'});
    } else {
      res.json(results);
    }
  });
});

// Rota para criar um novo médico
app.post(`/api/medico`, (req, res) => {
  const novoMedico = req.body;
  const especialidade = novoMedico.especialidade_medico; // Pega a especialidade do médico

  // Verifica se a especialidade já existe na tabela 'especialidade'
  const consultaEspecialidade = 'SELECT * FROM especialidade WHERE especialidade = ?';

  db.query(consultaEspecialidade, [especialidade], (error, results) => {
    if (error) {
      console.error('Erro na consulta de especialidade:', error);
      res.status(500).json({ error: 'Erro ao verificar a especialidade' });
    } else if (results.length === 0) {
      // Se a especialidade não existir, crie-a
      const sql = 'INSERT INTO especialidade (especialidade) VALUES (?)';

      db.query(sql, [especialidade], (error, result) => {
        if (error) {
          console.error('Erro na inserção de especialidade:', error);
          res.status(500).json({ error: 'Erro ao criar especialidade' });
        } else {
          // Após criar a especialidade, crie o médico associado a essa especialidade
          criarMedico(novoMedico, res);
        }
      });
    } else {
      // Se a especialidade existir, crie o médico associado a essa especialidade
      criarMedico(novoMedico, res);
    }
  });
});

// Função para criar um novo médico
const criarMedico = (novoMedico, res) => {
  const sql = 'INSERT INTO medico (nome_medico, cpf_medico, rg_medico, crm_medico, tel_medico, email_medico, endereco_medico, especialidade_medico, data_medico) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

  db.query(sql, [
    novoMedico.nome_medico,
    novoMedico.cpf_medico,
    novoMedico.rg_medico,
    novoMedico.crm_medico,
    novoMedico.tel_medico,
    novoMedico.email_medico,
    novoMedico.endereco_medico,
    novoMedico.especialidade_medico,
    novoMedico.data_medico
  ], (error, result) => {
    if (error) {
      console.error('Erro na inserção do médico:', error);
      res.status(500).json({ error: 'Erro ao criar médico' });
    } else {
      res.json({ message: 'Médico criado com sucesso', id: result.insertId });
    }
  });
};



app.listen(port, () => {
  console.log(`Servidor da API rodando na porta ${port}`);
});