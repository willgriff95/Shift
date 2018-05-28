const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/job');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      role: 'freelance',
      firstName: 'Elliot',
      lastName: 'Yandzio',
      email: 'c@c',
      password: 'c',
      passwordConfirmation: 'c',
      picture: 'https://i.imgur.com/kXdfAyL.png'
    },
    {
      role: 'freelance',
      firstName: 'Andrew',
      lastName: 'Xu',
      email: 'b@b',
      password: 'b',
      passwordConfirmation: 'b',
      picture: 'https://thesocietypages.org/socimages/files/2009/05/vimeo.jpg'
    },
    {
      role: 'manager',
      firstName: 'Will',
      lastName: 'Griffiths',
      email: 'a@a',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/QUIA9rO.jpg'
    }
  ])
    .then(users => {
      console.log(`${users.length} users were added to the DB.`);
      return Job.create([
        {
          title: 'Bar Tender',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          hours: 8,
          rate: 20,
          description: 'Cleaning, being my slave... blah blah blah',
          manager: users[2]
        }, {
          title: 'Bar Tender',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          hours: 8,
          rate: 20,
          description: 'Cleaning, being my slave... blah blah blah',
          manager: users[2]
        },{
          title: 'Bar Tender',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          hours: 8,
          rate: 20,
          description: 'Cleaning, being my slave... blah blah blah',
          manager: users[2]
        }
      ]);
    })
    .then(jobs => console.log(`${jobs.length} jobs created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
