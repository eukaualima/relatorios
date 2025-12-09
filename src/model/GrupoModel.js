export class GrupoModel
{
    construtor (empresa, numero, nome)
    {
        this.setEmpresa(empresa);
        this.setNumero(numero);
        this.setNome(nome);
    }

    getEmpresa ()
    {
        return this.empresa;
    }

    setEmpresa (empresa) // dois
    {
        if (!empresa)
        {
            throw new Error("O grupo deve estar ligado obrigatoriamente a uma empresa.");
        }

        if (isNaN(empresa)) 
        {
            throw new Error("O ID da empresa deve ser um número.");
        }

        this.empresa = empresa;
    }

    getNumero ()
    {
        return this.numero;
    }

    setNumero (numero)
    { 
        if (numero === null || numero === undefined)
        {
            throw new Error("O número do grupo é obrigatório.");
        }

        if (isNaN(numero))
        {
            throw new Error("O Número do grupo deve ser um número inteiro.");
        }

        this.numero = numero;
    }

    getNome ()
    {
        return this.nome;
    }

    setNome (nome)
    {
        if (!nome || nome.trim() === "")
        {
            throw new Error("O nome do grupo é obrigatório.");
        }

        if (nome.length > 45)
        {
            throw new Error("O nome do grupo não pode ser mairo do que 45 caracteres.");
        }

        this.nome = nome;
    }
}