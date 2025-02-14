require('dotenv').config();
const mongoose = require('mongoose');
const { Schema, model } = mongoose;

process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  throw new Error('Unhandled Rejection');
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => {
    console.log('Error connecting to MongoDB:', err);
    process.exit(1); // Exit the process with failure
  });

const personSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  age: Number,
  favoriteFoods: [String],
});

let Person = model('Person', personSchema);

const createAndSavePerson = (done) => {
  let Natnael = new Person({
    name: 'Natnael Tilahun',
    age: 24,
    favoriteFoods: ['Salad', 'Egg'],
  });
  Natnael.save(function (err, data) {
    if (err) return console.error('Saving error: ', err);
    done(null, data);
  });
};

const arrryOfPeople = [
  {
    name: 'Natnael Tilahun',
    age: 24,
    favoriteFoods: ['Salad', 'Egg'],
  },
  {
    name: 'Natnael Tilahun',
    age: 24,
    favoriteFoods: ['Salad', 'Egg'],
  },
  {
    name: 'Natnael Tilahun',
    age: 24,
    favoriteFoods: ['Salad', 'Egg'],
  },
];
const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function (err, done) {
    if (!err) {
      console.log('Data saved successfully!!');
      done(null, data);
    } else {
      console.error('Error to save data: ', err);
    }
  });
};

const personName = {
  name: 'Natnael Tilahun',
};
const findPeopleByName = (personName, done) => {
  Person.find(personName, function (err, done) {
    if (!err) {
      done(null, data);
    } else {
      console.error('Unable to fine the person:', err);
    }
  });
};

const food = {
  favoriteFoods: ['egg'],
};
const findOneByFood = (food, done) => {
  Person.findOne(food, function (err, done) {
    if (!err) {
      done(null, data);
    } else {
      console.error('Unable to find this:', err);
    }
  });
};

const personId = {
  _id: 'jfkdsaf',
};
const findPersonById = (personId, done) => {
  Person.findById(personId, function (err, done) {
    if (!err) {
      done(null, data);
    } else {
      console.error('Unable to find this:', err);
    }
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = 'hamburger';

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = 'Mary';

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = 'burrito';

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
