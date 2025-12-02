export class ClassificacaoModel
{
    constructor (id, nome)
    {
        this.id = id ? id : null;
        this.nome = nome;
    }

    // Getters e setters
    getNome ()
    {
        return this.nome;
    }

    setNome (nome)
    {
        this.nome = nome;
    }

    getId ()
    {
        return this.id;
    }
}