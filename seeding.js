const path = require('path');
const seeder = require('mongoose-seed');
const petsData = require('./petsData.json');

require('dotenv').config({ path: path.resolve(__dirname, './.env') });

seeder.connect(process.env.MONGO_DB, () => {
  seeder.loadModels([path.join(__dirname, './petModel.js')]);
  seeder.clearModels(['pet'], () => {
    seeder.populateModels(data, (err, done) => {
      if (err) return console.log('seed error', err);
      if (done) return console.log('seed done', done);
      return seeder.disconnect();
    });
  });
});

const data = [
  {
    model: 'pet',
    documents: petsData,
  },
];
