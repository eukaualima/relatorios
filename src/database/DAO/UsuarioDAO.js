import { pool } from '../db.js';
import { UsuarioModel } from '../../model/UsuarioModel.js';

export class UsuarioDAO 
{
    /**
     * Cadastra um novo usuário.
     * APLICA A REGRA DE NEGÓCIO: Senha = 5 primeiros dígitos do CPF.
     * 
     * @param {UsuarioModel} usuario 
     * @returns {Promise<boolean>}
     */
    async criar (usuario) 
    {
        try 
        {
            // Regra de Negócio: Extrai os 5 primeiros dígitos do CPF para ser a senha
            // O CPF no model já está limpo (sem pontos/traços)
            const senhaPadrao = usuario.getCpf().substring(0, 5);

            usuario.setSenha(senhaPadrao);

            const sql = `INSERT INTO usuarios (cpf, nome, email, senha, telefone, admin, empresa) VALUES (?, ?, ?, ?, ?, ?, ?)`;
            
            const valores = [
                usuario.getCpf(),
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getSenha(),
                usuario.getTelefone(),
                usuario.getAdmin(),
                usuario.getEmpresa()
            ];

            const [resultado] = await pool.execute(sql, valores);
            
            return resultado.affectedRows > 0;
        } 
        catch (error) 
        {
            console.error("Erro ao criar usuário:", error);

            throw error;
        }
    }

    /**
     * Atualiza os dados cadastrais do usuário.
     * 
     * @param {UsuarioModel} usuario 
     * @returns {Promise<boolean>}
     */
    async atualizar (usuario) 
    {
        try 
        {
            const sql = `UPDATE usuarios SET nome = ?, email = ?, senha = ?, telefone = ?, admin = ?, empresa = ? WHERE cpf = ?`;
            
            const valores = [
                usuario.getNome(),
                usuario.getEmail(),
                usuario.getSenha(),
                usuario.getTelefone(),
                usuario.getAdmin(),
                usuario.getEmpresa(),
                usuario.getCpf() // Usado no WHERE
            ];

            const [resultado] = await pool.execute(sql, valores);
            
            return resultado.affectedRows > 0;

        } 
        catch (error) 
        {
            console.error("Erro ao atualizar usuário:", error);

            throw error;
        }
    }

    /**
     * Remove um usuário pelo CPF.
     * 
     * @param {string} cpf 
     * @returns {Promise<boolean>}
     */
    async apagar (cpf) 
    {
        try {
            const sql = 'DELETE FROM usuarios WHERE cpf = ?';

            // Garante que o CPF passado para busca esteja limpo (apenas números)
            const cpfLimpo = cpf.replace(/\D/g, ''); 
            
            const [resultado] = await pool.execute(sql, [cpfLimpo]);
            
            return resultado.affectedRows > 0;

        }
        catch (error) 
        {
            console.error("Erro ao deletar usuário:", error);

            throw error;
        }
    }

    /**
     * Lista todos os usuários.
     * 
     * @returns {Promise<UsuarioModel[]>}
     */
    async buscarTodos () 
    {
        try 
        {
            const sql = 'SELECT * FROM usuarios ORDER BY nome ASC';
            const [linhas] = await pool.query(sql);

            return linhas.map(linha => new UsuarioModel(
                linha.cpf,
                linha.nome,
                linha.email,
                linha.senha,
                linha.telefone,
                linha.admin,
                linha.empresa
            ));
        } 
        catch (error) 
        {
            console.error("Erro ao listar usuários:", error);

            throw error;
        }
    }

    /**
     * Busca um usuário pelo CPF.
     * 
     * @param {string} cpf 
     * @returns {Promise<UsuarioModel|null>}
     */
    async buscarPorCpf (cpf) 
    {
        try 
        {
            const sql = 'SELECT * FROM usuarios WHERE cpf = ?';

            const cpfLimpo = cpf.replace(/\D/g, '');
            
            const [linhas] = await pool.query(sql, [cpfLimpo]);

            if (linhas.length === 0) return null;

            const linha = linhas[0];
            return new UsuarioModel(
                linha.cpf, linha.nome, linha.email, linha.senha, linha.telefone, linha.admin, linha.empresa
            );
        } 
        catch (error) 
        {
            console.error("Erro ao buscar usuário por CPF:", error);

            throw error;
        }
    }

    /**
     * Busca usuário por Email (útil para o Login).
     * 
     * @param {string} email 
     * @returns {Promise<UsuarioModel|null>}
     */
    async buscarPorEmail (email)
    {
        try 
        {
            const sql = 'SELECT * FROM usuarios WHERE email = ?';

            const [linhas] = await pool.query(sql, [email]);

            if (linhas.length === 0) return null;

            const linha = linhas[0];
            return new UsuarioModel(
                linha.cpf, linha.nome, linha.email, linha.senha, linha.telefone, linha.admin, linha.empresa
            );
        } 
        catch (error) 
        {
            console.error("Erro ao buscar usuário por Email:", error);

            throw error;
        }
    }
}