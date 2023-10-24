import { updateChart } from './chart.js';


const currentDate = new Date();

const year = currentDate.getFullYear();
const month = currentDate.getMonth() + 1;
const day = currentDate.getDate();

let userDate = `${year}${month}${day}`;
let userStartDate = `${year}0${month - 1}${day}`;
let userEndDate = `${year}${month}${day}`;

const listCurrentDate = document.querySelector("#list-current-date");
const selectedCurency = document.querySelector("#selected-currency");
const selectedCurencyAndDate = document.querySelector("#selected-currency-and-date");
const selectedCurencyAndDateRange = document.querySelector("#selected-currency-and-date-range");


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
const selectedCurencyAndDaterange = document.querySelector(".select-currency-and-date-range");


currencyShortNames.forEach(name => {
    const option1 = document.createElement("option");
    option1.value = name;
    option1.textContent = name;

    const option2 = document.createElement("option");
    option2.value = name;
    option2.textContent = name;

    const option3 = document.createElement("option");
    option3.value = name;
    option3.textContent = name;

    currencySelector.appendChild(option1);
    currencySelectorAndDate.appendChild(option2);
    selectedCurencyAndDaterange.appendChild(option3);
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


const fetchActualRateForSelectedCurrencyAndDateRange = async () => {
    const currency = document.querySelector(".select-currency-and-date-range").value;
    const response = await fetch(`https://bank.gov.ua/NBU_Exchange/exchange_site?start=20230924&end=20231024&valcode=aud&sort=exchangedate&order=desc&json`);
    let currencyList = [];
    let xValues = [];
    let yValues = [];

    if (response.ok) {
        currencyList = await response.json();
        currencyList.forEach(it => {
            xValues.push(it.calcdate);
            yValues.push(it.rate);
        })

        new Chart("myChart", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
                }]
            },
            options: {
                legend: {display: false},
                scales: {
                yAxes: [{ticks: {min: 6, max:16}}],
                }
            }
        });    
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
fetchActualRateForSelectedCurrencyAndDateRange();


document.querySelector(".select-currency").addEventListener("change", () => { reset(selectedCurency); fetchActualRateForSelectedCurrency() });
document.querySelector(".select-currency-and-date").addEventListener("change", () => { reset(selectedCurencyAndDate); fetchActualRateForSelectedCurrencyAndDate() });
document.querySelector(".select-currency-and-date-range").addEventListener("change", () => { reset(selectedCurencyAndDateRange); fetchActualRateForSelectedCurrencyAndDateRange() });


