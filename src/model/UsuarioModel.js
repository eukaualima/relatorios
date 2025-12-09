export class UsuarioModel
{
    constructor (cpf, nome, email, senha, telefone, admin, empresa)
    {
        this.setCpf(cpf);
        this.setNome(nome);
        this.setEmail(email);
        this.setSenha(senha);
        this.setTelefone(telefone);
        this.setAdmin(admin);
        this.setEmpresa(empresa);
    }

    getCpf ()
    {
        return this.cpf;
    }

    setCpf (cpf)
    {
        if (!cpf || cpf.trim() === "")
        {
            throw new Error("O CPF é obrigatório.");
        }

        // 000.000.000-00 ------> 00000000000
        const cpfLimpo = cpf.replace(/\D/g, ''); // /\D/g < regex para remover as pontuações e hífens (-)

        if (cpfLimpo.length > 11)
        {
            throw new Error("CPF inválido (+ de 11 caracteres).");
        }

        this.cpf = cpfLimpo;
    }

    getNome ()
    {
        return this.nome;
    }

    setNome (nome)
    {
        if (!nome || nome.trim() === "")
        {
            throw new Error("O nome do usuário é obrigatório.");
        }

        if (nome.length > 80)
        {
            throw new Error("O nome do usuário não pode ultrapassar 80 caracteres.");
        }

        this.nome = nome;
    }

    getEmail ()
    {
        return this.email;
    }

    setEmail (email)
    {
        if (!email || email.trim() === "")
        {
            throw new Error("O email é obrigatório.");
        }

        if (!email.includes('@') || !email.includes('.'))
        {
            throw new Error("O email fornecido não é válido.");
        }

        if (email.length > 80)
        {
            throw new Error("O email do usuário não pode ultrapassar 80 caracteres.");
        }

        this.email = email;
    }

    getSenha ()
    {
        return this.senha;
    }

    setSenha (senha)
    {
        if (!senha || senha.trim() === "")
        {
            throw new Error("A senha é obrigatória.");
        }

        // /!\ Importante: Em produção, não salvamos a senha em texto puro.
        if (senha.length > 32)
        {
            throw new Error("A senha do usuário não pode ultrapassar 32 caracteres.");
        }

        this.senha = senha;
    }

    getTelefone ()
    {
        return this.telefone;
    }

    setTelefone (telefone)
    {
        if (!telefone || telefone.trim() === "")
        {
            throw new Error("O telefone é obrigatório.");
        }

        // (99) 9 9999-9999 -> 99999999999
        const telefoneLimpo = telefone.replace(/\D/g, ''); // /\D/g < regex para remover as pontuações e hífens (-)

        if (telefoneLimpo.length > 11)
        {
            throw new Error("Telefone inválido (+ de 11 caracteres).");
        }

        this.telefone = telefoneLimpo;
    }

    getAdmin ()
    {
        return this.admin;
    }

    setAdmin (admin)
    {
        this.admin = (admin === true || admin === 1 || admin === '1') ? 1 : 0;
    }

    getEmpresa ()
    {
        return this.empresa;
    }

    setEmpresa (empresa)
    {
        if (!empresa)
        {
            throw new Error("O usuário deve ser obrigatoriamente dependente de uma empresa.");
        }

        if (isNaN(empresa)) 
        {
            throw new Error("O ID da empresa deve ser um número.");
        }

        this.empresa = empresa;
    }
}