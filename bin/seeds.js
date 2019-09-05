const mongoose = require('mongoose');
const Sneaker = require('../models/Sneaker');

const data = [
  { name: 'Yeezy 500', brand: 'Adidas' },
  { name: 'Nike Air Force 1', brand: 'Nike' },
  { name: 'Sky top II', brand: 'Supra' },
  { name: 'Old skool', brand: 'Vans' },
  { name: 'Tenis de primaria', brand: 'Fila' }
];

mongoose
  .connect('mongodb://localhost/lol', { useNewUrlParser: true })
  .then(async () => {
    const sneakers = await Sneaker.create(data);
    console.log(`${sneakers.length} sneakers created.`);
    mongoose.connection.close();
  })
  .catch((err) => {
    console.log(err);
  });
