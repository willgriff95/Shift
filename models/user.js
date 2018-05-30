const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
  role: [{ type: String, required: true }],
  firstName: { type: String, required: true },
  lastName: { type: String },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  picture: { type: String },
  companyPicture: { type: String}
});



userSchema.set('toJSON', { virtuals: true });


userSchema.virtual('jobs');
userSchema.set('toJSON', { virtuals: true });

// Makes uniqueness into a ValidationError for the purposes of convenience.
userSchema.plugin(require('mongoose-unique-validator'));

// Deletes the hashed password from the JSON response. Even though it's hashed, it's still best not to do it.
userSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json) {
    delete json.password;
    return json;
  }
});

userSchema.virtual('jobs', {
  localField: '_id',
  foreignField: 'user',
  ref: 'Job'
});

// Actually creates a function that is later used to validate the password in the controller.
userSchema.methods.validatePassword = function validatePassword(password){
  return bcrypt.compareSync(password, this.password);
};

// Making passwordConfirmation into a virtual, which is actually not stored in the database. We store it on `this`, because `this` is going to be available in all functions. We store it as _passwordConfirmation to indicate it's a temporary variable. It's just a convention.
userSchema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation){
    this._passwordConfirmation = passwordConfirmation;
  });

// Life cycle hook - 'before you anything, validate.' The `next()` thing after `pre('validate')` is validation, and this will throw a 'does not match' error if the passwordConfirmation and the password do not match.
userSchema.pre('validate', function checkPassword(next){
  if(this.isModified('password') && this._passwordConfirmation !== this.password){
    this.invalidate('passwordConfirmation', 'does not match');
  }
  next();
});

// Hashes the actual password, if it has been modified.
userSchema.pre('save', function hashPassword(next){
  if(this.isModified('password')){
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  next();
});

module.exports = mongoose.model('User', userSchema);
