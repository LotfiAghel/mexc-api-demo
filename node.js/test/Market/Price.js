const Spot = require('../src/spot')
const client = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


client.SymbolPriceTicker().then(response => client.logger.log(response.data))
  .catch(error => client.logger.error(error))