import { updateChart } from './chart.js';


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

let userDate = `${year}${month}${day}`;

const listCurrentDate = document.querySelector("#list-current-date");
const selectedCurency = document.querySelector("#selected-currency");
const selectedCurencyAndDate = document.querySelector("#selected-currency-and-date");


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


const displayCurrency = (currencies, div) => {
    const ul = document.createElement("ul");

    currencies.forEach(currency => {
        const li = document.createElement("li")
        li.textContent = `${currency.txt}(${currency.cc}) - ${currency.rate}`;
        ul.appendChild(li);
    });

    div.appendChild(ul);
}

const fetchActualRateForAll = async () => {
    const response = await fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json");
    let currencyList = [];

    if (response.ok) {
        currencyList = await response.json();
        displayCurrency(currencyList, listCurrentDate);
    }
}

const fetchActualRateForSelectedCurrency = async () => {
    const currency = document.querySelector(".select-currency").value;
    const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${year}${month}${day}&json`);
    let currencyList = [];

    if (response.ok) {
        currencyList = await response.json();
        displayCurrency(currencyList, selectedCurency);
    }
}

const fetchActualRateForSelectedCurrencyAndDate = async () => {
    const currency = document.querySelector(".select-currency-and-date").value;
    const response = await fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=${currency}&date=${userDate}&json`);
    let currencyList = [];

    if (response.ok) {
        currencyList = await response.json();
        displayCurrency(currencyList, selectedCurencyAndDate);
    }
}

const reset = (querySelector) => {
    querySelector.querySelector('ul').remove();
}


function saveUserDate(date) {
    document.querySelector('#userDate').value.replace(/[^0-9]/g, '');
}

document.querySelector('#aplyDate').addEventListener('click', () => { saveUserDate(userDate); reset(selectedCurencyAndDate); fetchActualRateForSelectedCurrencyAndDate() });


fetchActualRateForAll();
fetchActualRateForSelectedCurrency();
fetchActualRateForSelectedCurrencyAndDate();


document.querySelector(".select-currency").addEventListener("change", () => { reset(selectedCurency); fetchActualRateForSelectedCurrency() });
document.querySelector(".select-currency-and-date").addEventListener("change", () => { reset(selectedCurencyAndDate); fetchActualRateForSelectedCurrencyAndDate() });

