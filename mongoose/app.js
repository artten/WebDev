const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/fruitsDB');

const Fruit = mongoose.model('Fruit', { name: String
,score: Number,  review: String});

const kitty = new Fruit({ name: 'Apple', score : 8, review:"A" });
kitty.save().then(() => console.log('meow'));
