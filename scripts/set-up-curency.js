const currencyShortNames = [
    "AUD", "CAD", "CNY", "CZK", "DKK", "HKD", "HUF", "INR", "IDR", "ILS",
    "JPY", "KZT", "KRW", "MXN", "MDL", "NZD", "NOK", "RUB", "SGD", "ZAR",
    "SEK", "CHF", "EGP", "GBP", "USD", "BYN", "AZN", "RON", "TRY", "XDR",
    "BGN", "EUR", "PLN", "DZD", "BDT", "AMD", "DOP", "IRR", "IQD", "KGS",
    "LBP", "LYD", "MYR", "MAD", "PKR", "SAR", "VND", "THB", "AED", "TND",
    "UZS", "TWD", "TMT", "RSD", "TJS", "GEL", "BRL", "XAU", "XAG", "XPT",
    "XPD"
];

const currencySelector = document.querySelector(".select-currency");
const currencySelectorAndDate = document.querySelector(".select-currency-and-date");

export const setUpCurency = () => {
    currencyShortNames.forEach(name => {
        const option1 = document.createElement("option");
        option1.value = name;
        option1.textContent = name;

        const option2 = document.createElement("option");
        option2.value = name;
        option2.textContent = name;

        currencySelector.appendChild(option1);
        currencySelectorAndDate.appendChild(option2);
    });
}

