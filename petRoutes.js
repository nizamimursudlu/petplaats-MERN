const Pet = require('./petModel');

const router = require('express').Router();

router.post('/', async (req, res) => {
  const newPet = new Pet(req.body);

  try {
    const saved = await newPet.save();
    if (!saved)
      return res.status(400).json({
        success: false,
        message: 'Unable to save pet please try later!',
      });
    res.status(201).json({ success: true, id: saved._id });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: `An error occurred: ${error}` });
  }
});

router.get('/find/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);
    res.status(200).json(pet);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  const qNew = req.query.new;
  const qCategory = req.query.category;
  try {
    let pets;

    if (qNew) {
      pets = await Pet.find().sort({ createdAt: -1 }).limit(1);
    } else if (qCategory) {
      pets = await Pet.find({
        categories: {
          $in: [qCategory],
        },
      });
    } else {
      pets = await Pet.find();
    }

    res.status(200).json(pets);
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: `An error occurred: ${error}` });
  }
});

module.exports = router;
