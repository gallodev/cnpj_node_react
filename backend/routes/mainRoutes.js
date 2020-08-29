const express = require('express');
const path = require('path');

module.exports = (app) => {
  const main = async (req, res) => {
    app.use(express.static(path.join(__dirname, '../build')));
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
  };

  app.route('/')
    .get(main);
};
