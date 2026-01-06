import { Router } from "express";

// Importação dos controllers
import { EmpresaController } from "./controller/EmpresaController.js";
import { AtividadeController } from "./controller/AtividadeController.js";
import { ClassificacaoController } from "./controller/ClassificacaoController.js";
import { GrupoController } from "./controller/GrupoController.js";
import { UsuarioController } from "./controller/UsuarioController.js";

const router = Router();

// Instanciando os Controllers
const empresaController = new EmpresaController();
const atividadeController = new AtividadeController();
const classificacaoController = new ClassificacaoController();
const grupoController = new GrupoController();
const usuarioController = new UsuarioController();

// Rotas
router.get('/', (req, res) => 
{
  res.send('Olá mundo! - CápsulasDEV');
});

// ROTAS DE EMPRESA
router.get('/empresas', (req, res) => empresaController.listar(req, res));
router.get('/empresas/:id', (req, res) => empresaController.buscarPorId(req, res));
router.post('/empresas', (req, res) => empresaController.criar(req, res));
router.put('/empresas/:id', (req, res) => empresaController.atualizar(req, res));
router.delete('/empresas/:id', (req, res) => empresaController.apagar(req, res));

export { router };