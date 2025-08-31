let bitcoin = document.getElementById('bitcoin');
let ethereum = document.getElementById('ethereum');
let dogecoin = document.getElementById('dogecoin');

async function cryptoPrices() {
    await fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum,dogecoin&vs_currencies=usd")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            bitcoin.innerText = "$" + data.bitcoin.usd;
            ethereum.innerText = "$" + data.ethereum.usd;
            dogecoin.innerText = "$" + data.dogecoin.usd;
        })
        .catch(error => {
            console.error("Error fetching prices:", error);
        });
}

cryptoPrices();