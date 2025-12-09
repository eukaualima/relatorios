export class AtividadeModel
{
    constructor (id, classificacao, grupoEmpresa, grupoNumero, mes, ano, participou, horas, qtdestudos, observacao)
    {
        this.setId(id);
        this.setClassificacao(classificacao);
        this.setGrupoEmpresa(grupoEmpresa);
        this.setGrupoNumero(grupoNumero);
    }

    getId ()
    {
        return this.id;
    }

    setId (id)
    {
        this.id = id ? id : null;
    }

    getClassificacao ()
    {
        return this.classificacao;
    }

    setClassificacao (classificacao)
    {
        if (!classificacao || isNaN(classificacao))
        {
            throw new Error("O ID da classificação é obrigatório.");
        }

        this.classificacao = classificacao;
    }

    getGrupoNumero ()
    {
        return this.grupoNumero;
    }

    setGrupoNumero (grupoNumero)
    {
        if (!grupoNumero || isNaN(grupoNumero))
        {
            throw new Error("O ID do grupo é obrigatório.");
        }

        this.grupoNumero = grupoNumero;
    }

    getGrupoEmpresa ()
    {
        return this.grupoEmpresa;
    }

    setGrupoEmpresa (grupoEmpresa)
    {
        if (!grupoEmpresa || isNaN(grupoEmpresa))
        {
            throw new Error("O ID do grupo é obrigatório.");
        }

        this.grupoEmpresa = grupoEmpresa;
    }

}