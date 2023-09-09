import propTypes from "prop-types";

const CurrencyConvert = (props) => {
  return (
    <div className="flex items-center gap-1">
      <input
        className="w-[8em] p-[.5rem] rounded-md focus:outline-dotted "
        type="number"
        value={props.amount}
        onChange={(e) => props.onAmountChange(e.target.value)}
      />
      <select
        className="p-[.5rem] rounded-md  focus:outline-dotted"
        value={props.currency}
        onChange={(e) => props.onCurrencyChange(e.target.value)}
      >
        {props.currencies.map((currency) => (
          <option  value={currency}>{currency}</option>
        ))}
      </select>
    </div>
  );
};

CurrencyConvert.propTypes = {
  amount: propTypes.number.isRequired,
  currency: propTypes.string.isRequired,
  currencies: propTypes.array,
  onAmountChange: propTypes.func,
  onCurrencyChange: propTypes.func,
};

export default CurrencyConvert;
