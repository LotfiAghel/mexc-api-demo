const Future = require('../src/future')
const apiKey = "mx0vgl4MSctHWdP2gq";
const apiSecret = "25602cb296fc4f3987defb7160abcea7";


const Spot = require('../src/spot')
const client0 = new Spot(apiKey, apiSecret, { baseURL: 'https://api.mexc.com' })


client0.SymbolPriceTicker().then(response => {
    for(i in response.data)
      if(response.data[i]["symbol"]=="BTCUSDT")
        client0.logger.log(response.data[i]);
  })
  .catch(error => client0.logger.error(error))


const client = new Future(apiKey, apiSecret, { baseURL: 'https://contract.mexc.com' })


//Place an order
client.PlaceNewOrder({
  symbol: 'BTC_USDT',
  //price: 1911.24,
  vol: 4,
  side: 1,
  type: 5,
  feeCurrency: 'USDT',
  openType: 1,
  leverage : 1,
  positionMode : 1
}).then(response => client.logger.log(response.data))





client.OrderDeals().then(response => client.logger.log(response.data))  
client.DealDetails({orderId:'1426406190'}).then(response => client.logger.log(response.data))  
