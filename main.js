// const Stocks = require('stocks.js')

// async function consoleData(options) {
//     var result = await s.timeSeries(options);
//     console.log(result);
//     console.log()
// }

// const KEY = 'MVAWGOKSZ94LNANB';

// async function getStockPriceData(options) {
//     var result = await s.timeSeries(options);
//     console.log(result);
// }

// function loadStockPrices(s) {
//     const tesla = {
//         symbol: 'TSLA',
//         interval: '1min',
//         amount: 10
//     }
//     const spFive = {
//         symbol: 'SPX',
//         interval: '1min',
//         amount: 10
//     }
//     const dowJones = {
//         symbol: 'DJI',
//         interval: '1min',
//         amount: 10
//     }
    
//     tickers = [tesla, spFive, dowJones];
//     for(const symbol of tickers) {
//         getStockPriceData(s, symbol);
//     }

// }

// function loadCyrptoPrices() {
//     fetch('https://blockchain.info/ticker')
//         .then((response) => response.json())
//         .then((data) => {
//             console.log(data['USD']['last'])
//             const itemInfo = document.createElement('p');
//             itemInfo.innerText = `BTC: $ ${data['USD']['last']}`; 
//             itemInfo.setAttribute('class', 'info')  
//             const tracker = document.getElementsByClassName("trackerbox")[0];
//             tracker.append(itemInfo);
//         })
// };

function getCoinbasePrices() {
    fetch('https://api.coinbase.com/v2/exchange-rates?currency=USD')
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        const tokens = ['BTC', 'ETH', 'DOGE', 'ADA', 'SOL', 'SHIB']
        for(const token of tokens) {
            console.log(1 / data['data']['rates'][token]);
            const itemInfo = document.getElementById(token.toLowerCase());
            console.log(itemInfo)
            itemInfo.innerText = `${token}: $${(1 / data['data']['rates'][token]).toFixed(2)}`; 
            // itemInfo.setAttribute('class', 'info')
            // const tracker = document.getElementsByClassName("trackerbox")[0];
            // tracker.append(itemInfo);
        }
    })
}

// getCoinbasePrices();

// // consoleData(options);

function populateData() {
    // loadCyrptoPrices();
    // loadStockPrices(s);
    getCoinbasePrices();
    console.log("reloaded data");
}

document.addEventListener("DOMContentLoaded", () => {
    const tracker = document.createElement('div');

    // tracker.setAttribute('class', 'trackerbox')
    // document.querySelector('body').append(tracker);
    // const itemInfo = document.createElement('p');
    // itemInfo.setAttribute('class', 'info')
    // tracker.append(itemInfo);
    populateData();
    setInterval(populateData, 5 * 1000);
})