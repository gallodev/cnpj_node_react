module.exports = (app) => {
  const { CompanyController } = app.controllers;

  const companyList = async (req, res) => {
    try {
      res.header('Access-Control-Allow-Origin', '*');      
      return res.status(200).json(await CompanyController.findCompany(req));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
    }
  };

  const companySave = async (req, res) => {
    try {
      res.header('Access-Control-Allow-Origin', '*');
      return res.status(200).json(await CompanyController.saveCompany(req));
    } catch (error) {
      return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
    }
  };

  app.route('/empresa')
    .get(companyList)
    .post(companySave);
};
