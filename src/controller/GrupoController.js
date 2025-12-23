import { GrupoModel } from "../model/GrupoModel";
import { GrupoDAO } from "../database/DAO/GrupoDAO";

export class GrupoController
{
    /**
     * Listar TODOS os grupos do sistema.
     * 
     * @param {*} req - Requisição enviada pelo cliente/usuário.
     * @param {*} res - Resposta devolvida ao cliente/usuário.
     */
    async listar (req, res)
    {
        const dao = new GrupoDAO();

        try
        {
            const lista = await dao.buscarTodos();

            res.status(200).json(lista);

        }
        catch(error)
        {
            console.log(error);

            res.status(500).json({ mensagem: 'Erro ao listar grupos.', detalhe: error.message });

        }
    }

    /**
     * Listar TODOS os grupos de uma empresa.
     * 
     * @param {*} req - Requisição enviada pelo cliente/usuário.
     * @param {*} res - Resposta devolvida ao cliente/usuário.
     */
    async listarPorEmpresa (req, res)
    {
        const dao = new GrupoDAO();

        try
        {
            const idEmpresa = req.params.idEmpresa;

            const lista = await dao.buscarPorEmpresa(idEmpresa);

            res.status(200).json(lista);

        }
        catch(error)
        {
            console.log(error);

            res.status(500).json({ mensagem: 'Erro ao listar grupos da empresa.', detalhe: error.message });

        }
    }

    /**
     * Listar um grupo específico.
     * 
     * @param {*} req - Requisição enviada pelo cliente/usuário.
     * @param {*} res - Resposta devolvida ao cliente/usuário.
     */
    async listarComposta (req, res)
    {
        const dao = new GrupoDAO();

        try
        {
            const idEmpresa = req.params.idEmpresa;
            const numero = req.params.numero;

            const grupo = await dao.buscarComposta(idEmpresa, numero);

            res.status(200).json(grupo);

        }
        catch (error)
        {
            console.log(error);

            res.status(500).json({ mensagem: 'Erro ao listar grupo.', detalhe: error.message });

        }
    }

    /**
     * Registrar um novo grupo no sistema.
     * 
     * @param {*} req - Requisição enviada pelo cliente/usuário.
     * @param {*} res - Resposta devolvida ao cliente/usuário.
     */
    async criar (req, res)
    {
        const dao = new GrupoDAO();

        try
        {
            const { empresa, numero, nome } = req.body;

            const novoGrupo = new GrupoModel(empresa, numero, nome);

            await dao.criar(novoGrupo);

            res.status(201).json({ message: "Grupo criado com sucesso!", dados: novoGrupo });

        }
        catch (error)
        {
            console.log(error);

            if (error.code == 'ER_DUP_ENTRY')
            {
                res.status(409).json({ message: "Já existe um grupo com este número nesta empresa." });
            }

            if (error.code ==  'NO_REFERENCED_ROW')
            {
                res.status(400).json({ message: "A empresa que você tentou referenciar não existe." });
            }

            res.status(500).json({ mensagem: 'Erro ao criar o grupo.', detalhe: error.message });
        }
    }
}