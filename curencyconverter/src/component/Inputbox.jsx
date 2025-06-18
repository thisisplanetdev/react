import React from 'react';

function Inputbox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions=[],
  selectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
  className = '',
}) {       console.log('Rendering Inputbox with:', {
    currencyOptions,
    selectedCurrency
  });

  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className='flex-1 mr-4'>
        <label className='block text-black mb-1'>{label}</label>
        <input
          type="number"
          className='border-2 bg-gray text-black w-full p-2 rounded bg-gray-50'
          value={amount}
          onChange={(e) => onAmountChange(e.target.value)}
          disabled={amountDisabled}
        />
      </div>

      <div className='flex-1'>
        <label className='block text-black mb-1'>Currency Type</label>
         <select
          className='w-full p-2 border-2 rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black'
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisabled}
        >
          {
            currencyOptions.map((currencyCode) => (
              <option 
                key={currencyCode} 
                value={currencyCode}
                className='text-black'
              >
                {currencyCode.toUpperCase()}
              </option>
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default Inputbox;