import { useState } from 'react'

import './App.css'
import Inputbox from './component/inputbox'
import useCurrencyData from './hooks/useCurrencyData'

function App() {
  const [count, setCount] = useState(0)
  const bgurl  = 'data:image/jpeg;base64,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'
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('eur');
  const [to,setTo] = useState('inr')
  const currencyOptions = useCurrencyData(from);
  const rate = currencyOptions[to];
  const convertedAmount = amount * rate;
  return (
    <>
     <div className='h-screen bg-no-repeat bg-cover flex flex-col items-center justify-center align-middle' 
         style={{backgroundImage:`url(${bgurl})`}}>
      <Inputbox
        label="From"
        amount={amount}
        onAmountChange={setAmount}
        currencyOptions={Object.keys(currencyOptions)} // Pass all currency codes
        selectedCurrency={from}
        onCurrencyChange={setFrom}
      />
      
      <div>
        <button 
          className='w-auto p-1.5 m-0.5 rounded-lg bg-blue hover:bg-gray-200'
          onClick={() => {
            // Swap currencies
            setFrom(to);
            setTo(from);
          }}
        >
          Swap
        </button>
      </div>
      
      <Inputbox
        label="To"
        amount={convertedAmount.toFixed(2)}
        currencyOptions={Object.keys(currencyOptions)}
        selectedCurrency={to}
        onCurrencyChange={setTo}
        amountDisabled={true} // Typically can't edit "to" amount directly
      />
    </div>

    </>
  )
}

export default App
