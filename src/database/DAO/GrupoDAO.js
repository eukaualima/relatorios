import { pool } from "../db";
import { GrupoModel } from "../../model/GrupoModel";

export class GrupoDAO
{
    /**
     * Cria grupos no banco de dados.
     * 
     * @param {GrupoModel} grupo Objeto do tipo GrupoModel
     */
    async criar(grupo)
    {
        try
        {
            const sql = `INSERT INTO grupo (empresa, numero, nome) VALUES (?, ?, ?)`; // Placeholders = ?
            const valores = [grupo.getEmpresa(), grupo.getNumero(), grupo.getNome()];

            const [resultado] = await pool.execute(sql, valores);

            return resultado.affectedRows > 0; // true ou false
        }
        catch(error)
        {
            console.log("Erro ao criar o grupo: ", error);

            throw error;
        }
    }
}