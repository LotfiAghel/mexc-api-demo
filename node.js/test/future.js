const Future = require('../src/future')
const apiKey = "mx0vglfrvT5BeBZFgD";
const apiSecret = "f89f7b43718b4ab6803139a4053f3e55";


const Spot = require('../src/spot')
const client0 = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


client0.SymbolPriceTicker().then(response => {
    for(i in response.data)
      if(response.data[i]["symbol"]=="ETHUSDT")
        client0.logger.log(response.data[i]);
  })
  .catch(error => client0.logger.error(error))


const client = new Future(apiKey, apiSecret, { baseURL: 'https://contract.mexc.com' })


//Place an order
client.PlaceNewOrder({
  symbol: 'ETH_USDT',
  price: 1911.24,
  vol: 18.0/1911,
  side: 1,
  type: 2,
  openType: 1,
  leverage : 1
}).then(response => client.logger.log(response.data))
