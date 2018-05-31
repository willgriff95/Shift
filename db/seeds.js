const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/job');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      role: 'manager',
      firstName: 'Elliot',
      companyPicture: 'https://cdn.worldvectorlogo.com/logos/facebook-1.svg',
      lastName: 'Yandzio',
      email: 'c@c',
      password: 'c',
      passwordConfirmation: 'c',
      picture: 'https://i.imgur.com/wYVZMiw.jpg?1'
    },
    {
      role: 'freelance',
      companyPicture: 'http://thietkemythuat.com/thu-vien-logo/wp-content/uploads/2014/11/pixel_logo.jpg',
      firstName: 'Andrew',
      lastName: 'Xu',
      email: 'b@b',
      password: 'b',
      passwordConfirmation: 'b',
      picture: 'https://i.imgur.com/JblBJ51.jpg?2'
    },
    {
      role: 'manager',
      companyPicture: 'http://brandemia.org/sites/default/files/sites/default/files/logo_google-despues.jpg',
      firstName: 'Will',
      lastName: 'Griffiths',
      email: 'will.griffiths@pixelcrayons.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/QUIA9rO.jpg'
    }
  ])
    .then(users => {
      console.log(`${users.length} users were added to the DB.`);
      return Job.create([
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.',
          manager: users[2]
        }
      ]);
    })
    .then(jobs => console.log(`${jobs.length} jobs created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
