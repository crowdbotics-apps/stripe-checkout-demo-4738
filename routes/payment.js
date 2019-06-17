const stripe = require('../server/config/stripe')

const stripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr })
  } else {
    res.status(200).send({ success: stripeRes })
  }
}

const paymentAPI = app => {
  app.get('/', (req, res) => {
    res.send({ message: 'Stripe Checkout server!', timestamp: new Date().toISOString })
  })

  app.post('/', (req, res) => {
    stripe.charges.create(req.body, stripeCharge(res))
  })

  return app
}

module.exports = paymentAPI