const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');

const PORT = process.env.PORT || 8080;

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
    await mongoose.connect(
      'mongodb+srv://petshop:EwQpI904kIk9FW85@cluster0.wy4db.mongodb.net/petshop?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (err) {
    console.error(err);
  }
}

start();
