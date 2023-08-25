import React, { useState, useEffect } from 'react';

// Composant principal du convertisseur de devises
function CurrencyConverter() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('Senegal');
  const [toCurrency, setToCurrency] = useState('France');
  const [exchangeRate, setExchangeRate] = useState(0);

  // Simule la récupération des taux de change depuis l'API
  useEffect(() => {
    // Remplacez cet exemple par une requête réelle vers l'API de taux de change
    const fakeExchangeRate = 0.85;
    setExchangeRate(fakeExchangeRate);
  }, [fromCurrency, toCurrency]);

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleFromCurrencyChange = (event) => {
    setFromCurrency(event.target.value);
  };

  const handleToCurrencyChange = (event) => {
    setToCurrency(event.target.value);
  };

  const convertedAmount = (amount * exchangeRate).toFixed(2);

  return (
    <div>
      <h1>Currency Converter</h1>

      <div>
        <p>Converted Amount: {convertedAmount} {toCurrency}</p>
        <select value={toCurrency} onChange={handleToCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Ajoutez d'autres options de devises ici */}
        </select>
      </div>
      <div>
        <input type="number" value={amount} onChange={handleAmountChange} />
        <select value={fromCurrency} onChange={handleFromCurrencyChange}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          {/* Ajoutez d'autres options de devises ici */}
        </select>
      </div>
      
    </div>
  );
}

export default CurrencyConverter;