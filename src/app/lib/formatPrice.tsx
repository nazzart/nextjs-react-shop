/*
  Re-usable currency / price function, which formats the value to a needed format.
*/
export default function formatPrice(value: number | undefined) : string {
    const formatter = new Intl.NumberFormat("us-US", {
      style: "currency",
      currency: "USD",
      currencyDisplay: 'narrowSymbol'
    });
  
    let price = value !== undefined ? formatter.format(value) : "";
  
    return price;
  }