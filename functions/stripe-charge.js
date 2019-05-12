const stripte = require('stripe')('secret_key');

exports.handler = async function(event) {
  const { tokenId, email, name, description, amount } = JSON.parse(event.body);

  const customer = await stripe.customers.create({
    description: email,
    source: tokenId
  })

  await stripe.charges.create({
    customer: customer.id,
    amount,
    name,
    description,
    currency: 'usd'
  })
}