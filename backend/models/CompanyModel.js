const CompanyModel = (app) => {
  const { database } = app;

  const findCompany = async (req) => {
    try {
      const search = req.query;

      const data = await database.connection('company')
        .where('cnpj', 'like', `${search}%`)
        .orWhere('nome', 'like', `${search}%`);

      return data;
    } catch (error) {
      return error;
    }
  };

  const saveCompany = async (req) => {
    try {
      const {
        cnpj,
        cep,
        complemento,
        email,
        logradouro,
        municipio,
        nome,
        numero,
        telefone,
        uf,

      } = req.body;

      if (cnpj !== undefined || cnpj !== 0 || cnpj !== '') {
        const hasCompany = await database.connection('company').where('cnpj', cnpj).select('id').first();

        if (hasCompany !== undefined) {
          return `Já existe a empresa com o CNPJ :${cnpj} no banco de dados.`;
        }
      }

      const [id] = await database.connection('company').returning('id').insert({
        cnpj,
        nome,
        logradouro,
        numero,
        complemento,
        municipio,
        uf,
        cep,
        telefone,
        email,
      });

      return id;
    } catch (error) {
      return error;
    }
  };

  return {
    findCompany,
    saveCompany,
  };
};

module.exports = CompanyModel;
