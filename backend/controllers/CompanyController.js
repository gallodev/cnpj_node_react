module.exports = (app) => {
  const { CompanyModel } = app.models;

  const findCompany = async (req) => CompanyModel.findCompany(req);

  const saveCompany = async (req) => CompanyModel.saveCompany(req);

  return {
    findCompany,
    saveCompany,
  };
};
