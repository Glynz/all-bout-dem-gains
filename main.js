// const Stocks = require('stocks.js')

// async function consoleData(options) {
//     var result = await s.timeSeries(options);
//     console.log(result);
//     console.log()
// }

async function getStockPriceData(options) {
    var result = await s.timeSeries(options);
    console.log(result);
}

function loadStockPrices(s) {
    const tesla = {
        symbol: 'TSLA',
        interval: '1min',
        amount: 10
    }
    const spFive = {
        symbol: 'SPX',
        interval: '1min',
        amount: 10
    }
    const dowJones = {
        symbol: 'DJI',
        interval: '1min',
        amount: 10
    }
    
    tickers = [tesla, spFive, dowJones];
    for(const symbol of tickers) {
        getStockPriceData(s, symbol);
    }

}

function loadCyrptoPrices() {
    fetch('https://blockchain.info/ticker')
        .then((response) => response.json())
        .then((data) => {
            console.log(data['USD']['last'])
            const itemInfo = document.createElement('p');
            itemInfo.innerText = `BTC: $ ${data['USD']['last']}`; 
            itemInfo.setAttribute('class', 'info')
            const tracker = document.getElementsByClassName("trackerbox")[0];
            tracker.append(itemInfo);
        })
};

// consoleData(options);

function populateData(s) {
    loadCyrptoPrices();
    // loadStockPrices(s);
}

document.addEventListener("DOMContentLoaded", () => {
    // var s = new Stocks('MVAWGOKSZ94LNANB');
    const tracker = document.createElement('div');
    tracker.setAttribute('class', 'trackerbox')
    document.querySelector('body').append(tracker);
    const itemInfo = document.createElement('p');
    itemInfo.setAttribute('class', 'info')
    tracker.append(itemInfo);
    populateData();
})