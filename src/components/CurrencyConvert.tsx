import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Select, Input, Button, VStack, Text, Container, Heading } from '@chakra-ui/react';

interface Currency {
  code: string;
  name: string;
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(1);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

// ... (kode sebelumnya)

// ... (kode sebelumnya)

useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://v6.exchangerate-api.com/v6/08cd236e61481d687f449459/latest/USD');
  
        const currencyData = response.data.conversion_rates;
        const currencyList = Object.keys(currencyData).map((code) => ({
          code,
          name: code, // Kita gunakan kode sebagai nama karena API tidak memberikan deskripsi untuk mata uang
        }));
        setCurrencies(currencyList);
      } catch (error: any) {
        console.error('Error fetching currency data:', error.message);
      }
    };
  
    fetchData();
  }, []);
  
  useEffect(() => {
    const fetchExchangeRate = async () => {
      try {
        const response = await axios.get(`https://v6.exchangerate-api.com/v6/08cd236e61481d687f449459/latest/${fromCurrency}`);
  
        const rate = response.data.conversion_rates[toCurrency];
        setExchangeRate(rate);
      } catch (error: any) {
        console.error('Error fetching exchange rate:', error.message);
      }
    };
  
    fetchExchangeRate();
  }, [fromCurrency, toCurrency]);
  

  

  useEffect(() => {
    if (exchangeRate !== null) {
      const converted = amount * exchangeRate;
      setConvertedAmount(converted);
    }
  }, [amount, exchangeRate]);

  const handleConvert = () => {
    // Implement any additional logic here
  };

  return (
    <Container mt="120px">
        <Heading textAlign="center" mb="10">Currency Convert</Heading>

    <VStack spacing={4} align="center">
      <Input
        type="number"
        value={amount}
        onChange={(e) => setAmount(parseFloat(e.target.value))}
        />
      <Select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
        {currencies.map((currency) => (
          <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </Select>
      <Text>to</Text>
      <Select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
        {currencies.map((currency) => (
            <option key={currency.code} value={currency.code}>
            {currency.name}
          </option>
        ))}
      </Select>
      <Button colorScheme="teal" onClick={handleConvert}>
        Convert
      </Button>
      {convertedAmount !== null && (
          <Text>
          {amount} {fromCurrency} is equal to {convertedAmount.toFixed(2)} {toCurrency}
        </Text>
      )}
    </VStack>
      </Container>
  );
};

export default CurrencyConverter;
