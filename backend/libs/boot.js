module.exports = (app) => {
  if (process.env.NODE_ENV !== 'validate') {
    app.listen(app.get('port'), () => {
      // eslint-disable-next-line no-console
      console.log(`Node API - porta ${app.get('port')}`);
    });
  }
};
