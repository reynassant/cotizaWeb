var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://api.coinbase.com/v2/exchange-rates?currency=BTC", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));