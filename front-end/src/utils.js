const format_cnpj = (cnpj) => {
    return cnpj.replace(/[^\d]+/g,'');
}

const format_company_data = (data,origin="api") =>{
    return {
        cnpj : format_cnpj(data.cnpj),
        nome : data.nome,
        logradouro : data.logradouro,
        numero : data.numero,
        complemento : data.complemento,
        municipio : data.municipio,
        uf : data.uf,
        cep : data.cep,
        telefone : data.telefone,
        email : data.email,
        origin : origin
    }
}

export {
    format_company_data
}