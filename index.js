import Freecurrencyapi from '@everapi/freecurrencyapi-js';

const freecurrencyapi = new Freecurrencyapi('fca_live_cmYGOxkBS90mYxLtwzjyxXlP5dNmQCLKo1MutNvl');

// convertCurrency('USD', 'INR', 2);

export async function convertCurrency(formCurrency, toCurrency, quintet) {
      const res = await freecurrencyapi.latest({
            base_currency: formCurrency,
            currencies: toCurrency
      })
      const multiData = res.data[toCurrency]*quintet;
      return multiData*quintet;
}
