const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect("mongodb+srv://db_user:dbtest@cluster0.vfkarsl.mongodb.net/?appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true });

const personSchema = new mongoose.Schema({
      name: {
              type: String,
              required: true
            },
      age: {
              type: Number
           },
      favoriteFoods: {
                        type: [String]
                     }
}); 

let Person = mongoose.model('Person', personSchema);


//const createAndSavePerson = (done) => {
//  done(null /*, data*/);
//};

const createAndSavePerson = (done) => {
  // create a new instance of the person model
  const person = new Person({
    name : "John",                     // required string
    age: 30,                           // number
    favoriteFoods: ["pizza", "pasta"]  // array of strings
  });

  // save the document to mongodb
  person.save((err, data) => {
    if (err) return done(err);        // if there is an error, pass it to the callback
    done(null, data);                 // if successful, pass tha saved document
  }); 
};

//const createManyPeople = (arrayOfPeople, done) => {
//  done(null /*, data*/);
//};

const createManyPeople = (arrayOfPeople, done) => {
  // use the person model to create multiple documents at once
  // MongoDB uses documents (not rows or entries) to 
  // represent individual records
  Person.create(arrayOfPeople, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//const findPeopleByName = (personName, done) => {
//  done(null /*, data*/);
//};

const findPeopleByName = (personName, done) => {
  // using model.find() to search 
  // for all the people with the given name
  Person.find({name: personName}, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//const findOneByFood = (food, done) => {
//  done(null /*, data*/);
//};

const findOneByFood = (food, done) => {
  // only the first document that matches the criteria
  Person.findOne({favoriteFoods: food}, (err, data) => {
    if (err) return done(err);
    done(null, data);
  });
};

//const findPersonById = (personId, done) => {
//  done(null /*, data*/);
//};

const findPersonById = (personId, done) => {
  Person.findById(personId, (err, data) =>{
    if (err) return done(err);
    done(null, data);
  });
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

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
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

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
