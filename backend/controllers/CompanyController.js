module.exports = (app) => {
  const { CompanyModel } = app.models;

  const findCompany = async (req) => CompanyModel.findCompany(req);

  return {
    findCompany,
  };
};
