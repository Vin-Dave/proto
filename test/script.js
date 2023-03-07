const convertBtn = document.getElementById("convert");
const resultDiv = document.getElementById("result");

convertBtn.addEventListener("click", () => {
  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  // make request to API
  fetch(`https://api.exchangerate-api.com/v4/latest/${from}`)
    .then((response) => response.json())
    .then((data) => {
      const rate = data.rates[to];
      const convertedAmount = (amount * rate).toFixed(2);
      resultDiv.innerHTML = `${amount} ${from} = ${convertedAmount} ${to}`;
    })
    .catch((error) => {
      console.log("Error:", error);
      resultDiv.innerHTML = "Wystąpił błąd. Spróbuj ponownie później.";
    });
});
