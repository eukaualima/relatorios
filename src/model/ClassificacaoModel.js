export class ClassificacaoModel
{
    constructor (id, nome)
    {
        this.setId(id);
        this.setNome(nome);
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

    setId (id)
    {
        this.id = id ? this.id : null;
    }
}