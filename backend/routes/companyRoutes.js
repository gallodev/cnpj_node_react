module.exports = (app) => {
  const { CompanyController } = app.controllers;

  const company = async (req, res) => {
    try {
      return res.status(200).json(await CompanyController.findCompany(req));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      return res.status(500).json({ message: 'Ocorreu uma falha interna no servidor.' });
    }
  };

  app.route('/empresa')
    .get(company);
};
