const mongoose = require('mongoose');
const moment = require('moment');


const requestSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: 'User'},
  status: { type: String, default: 'pending' }
}, {
  timestamps: true
});

const commentSchema = new mongoose.Schema({
  content: { type: String, required: true },
  createdBy: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
});

// only the manager is able to add a job
const jobSchema = new mongoose.Schema({
  title: { type: String },
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  contract: { type: Number, min: 1, max: 12, required: 'Pay is required' },
  rate: { type: Number, required: 'Pay is required' },
  description: { type: String, required: 'Description is required' },
  companyPicture: { type: String},
  manager: { type: mongoose.Schema.ObjectId, ref: 'User'},
  requests: [ requestSchema ],
  comments: [ commentSchema ]

});




commentSchema.set('toJSON', { virtuals: true });


jobSchema.virtual('createdAtRelative')
  .get(function(){
    return moment(this.createdAt).fromNow();
  });

jobSchema.set('toJSON', {
  virtuals: true,
  transform(doc, json){
    delete json.createdAt;
    delete json.updatedAt;
    return json;
  }
});

jobSchema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('Job', jobSchema);
