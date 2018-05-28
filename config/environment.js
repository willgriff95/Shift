// process.env accesses the .zshrc (z shell) file, so it lets us use a different port locally and when deployed.
const port = process.env.PORT || 4000;
const env = process.env.NODE_ENV || 'dev';
const dbURI =  process.env.MONGODB_URI || `mongodb://localhost/shift-${env}`;
const secret = process.env.SECRET || 'shh, it is a secret';

module.exports = { port, dbURI, secret, env };
