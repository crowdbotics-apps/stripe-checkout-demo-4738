const configureStripe = require('stripe')

const STRIPE_SECRET_KEY = 'sk_text_XXXX';

const stripe = configureStripe(STRIPE_SECRET_KEY)

module.exports = stripe