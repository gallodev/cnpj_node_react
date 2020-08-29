const CompanyModel = (app) => {
  const { database } = app;

  const findCompany = async (req) => {
    try {
      const search = req.query;

      const data = await database.connection('company')
        .where('CNPJ', 'like', `%${search}`)
        .orWhere('nome', 'like', `%${search}`);

      return data;
    } catch (error) {
      return error;
    }
  };

  const saveCompany = async (req) => {
    try {
      const {
        CNPJ,
        nome,
        logradouro,
        numero,
        complemento,
        municipio,
        uf,
        cep,
        telefone,
        email,
      } = req.body;

      if (CNPJ !== undefined || CNPJ !== 0 || CNPJ !== '') {
        const hasCompany = await database.connection('company').where('CNPJ', CNPJ).select('id').first();

        if (hasCompany !== undefined) {
          throw new Error(`Já existe a empresa com o CNPJ :${CNPJ} no banco de dados.`);
        }
      }

      const [id] = await database.connection('pacientes').insert({
        CNPJ,
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
