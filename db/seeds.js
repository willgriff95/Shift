const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/job');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  User.create([
    {
      role: 'Employer',
      rating: 5,
      fullName: 'Elliot Yandzio',
      companyPicture: 'https://cdn.worldvectorlogo.com/logos/facebook-1.svg',
      email: 'elliot@facebook.co.uk',
      password: 'e',
      passwordConfirmation: 'e',
      picture: 'https://i.imgur.com/wYVZMiw.jpg?1',
      bio: 'Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk'
    },
    {
      role: 'Freelancer',
      rating: 5,
      companyPicture: 'http://thietkemythuat.com/thu-vien-logo/wp-content/uploads/2014/11/pixel_logo.jpg',
      fullName: 'Andrew Xu',
      email: 'andrew@pixelcrayons.co.uk',
      password: 'b',
      passwordConfirmation: 'b',
      picture: 'https://i.imgur.com/JblBJ51.jpg?2',
      bio: 'Senior Full Stack Developer currently seeking opportunities I’m always looking for exciting work; from freelance opportunities to working for innovative companies so feel free to get in touch even just to say Hi! hello@willgriff.co.uk'
    },
    {
      role: 'Employer',
      rating: 5,
      companyPicture: 'http://brandemia.org/sites/default/files/sites/default/files/logo_google-despues.jpg',
      fullName: 'Will Griffiths',
      email: 'will.griffiths@google.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/QUIA9rO.jpg',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
    },
    {
      role: 'Employer',
      rating: 5,
      companyPicture: 'http://static-assets.generalassemb.ly/logos/generalassembly-open-graph.png',
      fullName: 'Alex Poytner',
      email: 'alex.poytner@ga.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/HdPjx7W.jpg?1',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
    },
    {
      role: 'Employer',
      rating: 5,
      companyPicture: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Monzo_logo.svg/1200px-Monzo_logo.svg.png',
      fullName: 'Matt Hunter-King',
      email: 'matt.h.king@monzo.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/qhGRjXJ.jpg?3',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
    },
    {
      role: 'Employer',
      rating: 5,
      companyPicture: 'http://winerieparisienne.fr/wp-content/uploads/2017/07/spotify-logo-vector-download.jpg',
      fullName: 'Bridget Turnbull',
      email: 'bridg.t@spotify.co.uk',
      password: 'a',
      passwordConfirmation: 'a',
      picture: 'https://i.imgur.com/6OP0J8n.jpg?2',
      bio: 'Responsible for building the function in the APAC region and focused on the growth of the business organisation and support functions in partnership with the regional executives and HR leaders to determine and drive the APAC people strategy. Leading a team of 40+ staffing professionals across India, China, South East Asia, Japan and Australia. Covering all hiring into sales, marketing, legal, public policy, corporate comms, finance, people operations and facilities.'
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
          rate: 350,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[1]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
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
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[3]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[4]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        },
        {
          title: 'JavaScript Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 675,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Snr. Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 250,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[3]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[4]
        },
        {
          title: 'Web Developer',
          location: {
            lat: 51.518159,
            lng: -0.078075
          },
          contract: 8,
          rate: 200,
          description: 'Facebook\'s mission is to give people the power to build community and bring the world closer together. Through our family of apps and services, we\'re building a different kind of company that connects billions of people around the world, gives them ways to share what matters most to them, and helps bring people closer together.',
          manager: users[0]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
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
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
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
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
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
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        }, {
          title: 'Web Developer',
          location: {
            lat: 52.518159,
            lng: -0.138075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2]
        },{
          title: 'Web Developer',
          location: {
            lat: 53.518159,
            lng: -0.178075
          },
          contract: 8,
          rate: 200,
          description: 'Google\'s software engineers develop the next-generation technologies that change how billions of users connect, explore, and interact with information and one another. Our products need to handle information at massive scale, and extend well beyond web search. We\'re looking for engineers who bring fresh ideas from all areas, including information retrieval, distributed computing, large-scale system design.',
          manager: users[2],
          requests: [{
            user: users[1]
          },{
            user: users[3]
          },{
            user: users[0]
          }]
        }
      ]);
    })
    .then(jobs => console.log(`${jobs.length} jobs created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
