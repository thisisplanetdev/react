  import { useCallback, useEffect, useState } from "react";
  import "./App.css";

  function App() {
    
    const [color, setColor] = useState("#ff4f4f");
    const [len, setLen] = useState(9);
    const [number, setNumber] = useState(false);
    const [char, setChar] = useState(false);
  const [generatedPassword, setGeneratedPassword] = useState('abccd');
  const generatePassword = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (number) chars += '0123456789';
    if (char) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    
    let password = '';
    for (let i = 0; i < len; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    console.log(password)
    return password;
  },[len,number,char]);
  useEffect(()=>{
    generatePassword()
  },[len,length,number])
  const handleGenerate = () => {
    setGeneratedPassword(generatePassword());
  };
  const copypasword=()=>{
    console.log("clicked")
    window.navigator.clipboard.writeText(generatePassword)
  }
    const toggleNumber = () => setNumber((prev) => !prev);
    const toggleChar = () => setChar((prev) => !prev);

    return (
      <>
        <div id="1" className="flex flex-wrap justify-center align-middle p-4 bg-gray-700 rounded-2xl max-w-fit shadow-amber-100  ">
          <div className="p-2">
            <h1 className="text-3xl">Password Generator</h1>
            <div>
              <input
                className="bg-amber-50 rounded-2xl p-1.5 m-1.5 text-black "
                type="text"
                name="password"
                id="password"
                value={generatePassword()}
                readOnly
              />
              <button type="button" onClick={{copypasword}} className="text-2xl   bg-blue-400 rounded-xl pb-1.5 m-1.5" >
                copy
              </button>
            </div>

            <div>
              <input
                type="range"
                min="4"
                max="32"
                value={len}
                onChange={(e) => setLen(e.target.value)}
              />
              <span>{len}</span>
              <input
                type="checkbox"
                name="number"
                id="number"
                checked={number}
                onChange={toggleNumber}
              />
              <span className="text-orange-400 font-semibold">number</span>

              <input
                type="checkbox"
                name="character"
                id="character"
                checked={char}
                onChange={toggleChar}
              />
              <span className="text-orange-400 font-semibold">char</span>
            </div>
          </div>
        </div>
      </>
    );
  }

  export default App;
