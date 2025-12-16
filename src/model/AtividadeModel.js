export class AtividadeModel
{
    constructor (id, classificacao, grupoEmpresa, grupoNumero, mes, ano, participou, horas, qtdestudos, observacao)
    {
        this.setId(id);
        this.setClassificacao(classificacao);
        this.setGrupoEmpresa(grupoEmpresa);
        this.setGrupoNumero(grupoNumero);
        this.setMes(mes);
        this.setAno(ano);
        this.setParticipou(participou);
        this.setHoras(horas);
        this.setQtdEstudos(qtdestudos);
        this.setObservacao(observacao);
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
            throw new Error("A Classificação da atividade é obrigatória.");
        }
        this.classificacao = classificacao;
    }

    getGrupoEmpresa ()
    {
        return this.grupoEmpresa;
    }

    setGrupoEmpresa (grupoEmpresa)
    {
        if (!grupoEmpresa || isNaN(grupoEmpresa)) 
        {
            throw new Error("O vínculo com a Empresa do Grupo é obrigatório.");
        }
        this.grupoEmpresa = grupoEmpresa;
    }

    getGrupoNumero ()
    {
        return this.grupoNumero;
    }

    setGrupoNumero (grupoNumero)
    {
        if (grupoNumero === null || grupoNumero === undefined || isNaN(grupoNumero))
        {
            throw new Error("O vínculo com o Número do Grupo é obrigatório.");
        }
        this.grupoNumero = grupoNumero;
    }

    getMes ()
    {
        return this.mes;
    }

    setMes (mes)
    {
        if (!mes || mes.trim() === "") 
        {
            throw new Error("O Mês de competência é obrigatório.");
        }
        if (mes.length > 45) 
        {
            throw new Error("O Mês excede 45 caracteres.");
        }
        this.mes = mes;
    }

    getAno ()
    {
        return this.ano;
    }

    setAno (ano)
    {
        if (!ano || isNaN(ano) || ano < 1900 || ano > 2100) 
        {
            throw new Error("O Ano de competência é inválido.");
        }
        this.ano = ano;
    }

    getParticipou ()
    {
        return this.participou;
    }

    setParticipou (participou)
    {
        this.participou = (participou === true || participou === 1 || participou === '1') ? 1 : 0;
    }

    getHoras ()
    {
        return this.horas;
    }

    setHoras (horas)
    {
        // Se for nulo ou vazio, aceita como null (conforme RN05)
        if (horas === null || horas === undefined || String(horas).trim() === '') 
        {
            this.horas = null;
        } else 
        {
            if (isNaN(horas)) 
            {
                throw new Error("O campo Horas deve ser numérico.");
            }
            this.horas = horas;
        }
    }

    getQtdEstudos ()
    {
        return this.qtdestudos;
    }

    setQtdEstudos (qtdestudos)
    {
        if (qtdestudos === null || qtdestudos === undefined || String(qtdestudos).trim() === '') 
        {
            this.qtdestudos = null;
        } 
        else 
        {
            if (isNaN(qtdestudos)) 
            {
                throw new Error("O campo Qtd Estudos deve ser numérico.");
            }
            this.qtdestudos = qtdestudos;
        }
    }

    getObservacao ()
    {
        return this.observacao;
    }

    setObservacao (observacao)
    {
        if (observacao && observacao.length > 150) 
        {
            throw new Error("A Observação excede o limite de 150 caracteres.");
        }
        this.observacao = observacao;
    }
}