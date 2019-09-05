const Sneaker = require('../models/Sneaker');

exports.indexView = (req, res, next) => {
  res.render('index');
};

exports.sneakersGet = async (req, res, next) => {
  const sneakers = await Sneaker.find();
  res.render('sneaker-list', { sneakers });
};

exports.sneakersDetail = async (req, res, next) => {
  const { id } = req.params;
  const sneaker = await Sneaker.findById(id);
  res.render('sneaker-detail', sneaker);
};
