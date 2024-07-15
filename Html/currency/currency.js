function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    
    const exchangeRates = {
    USD: 1.0,
    EUR: 0.85,
    GBP: 0.73,
    NPR: 118.0, 
    INR: 74.0, 
    };
    
    const exchangeRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    const convertedAmount = amount * exchangeRate;
    document.getElementById("convertedAmount").value = convertedAmount.toFixed(2);
    }