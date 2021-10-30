const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ extended: true }));

app.use('/api/pets', require('./petRoutes'));
app.use('/api/checkout', require('./stripeRoute'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

async function start() {
  try {
    await mongoose.connect(process.env.MONGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}
start();
