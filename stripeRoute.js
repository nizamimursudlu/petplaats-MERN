const router = require('express').Router();
const stripe = require('stripe')(
  'sk_test_51IF5ZWEhVqPAJi7Tr5C1Z63Clm7RLQ62Pub4Fc7mrwv29AuwnsfsnD5sfUcNpIaZMjBayDy9bNX6UJHYgpmegcnG00c03bGd1x',
);
router.post('/payment', (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: 'eur',
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    },
  );
});

module.exports = router;
