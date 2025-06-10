import { React, useCallback, useEffect, useState } from 'react';

const PasswordGenerator = () => {
  const [len, setlen] = useState('14');
  const [num, setnum] = useState(false);
  const [strin, setStrin] = useState('');
  const [sp, setsp] = useState(false);

  // Function to generate password
  const generatePassword = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPabcdefghijklmnopqrstuvwxyz"; // was const → now let

    if (num) {
      str += "1234567890";
    }

    if (sp) {
      str += "!@#$%^&*()_+{}:><?";
    }

    let pa = "";

    for (let i = 0; i < len; i++) {
      const char = Math.floor(Math.random() * str.length);
      pa += str.charAt(char);
    }

    setStrin(pa); // Update the password state
  }, [len, num, sp]);

  // This useEffect will run whenever len, num, or sp changes
  useEffect(() => {
    generatePassword(); // Execute password generation when dependencies change
  }, [len, num, sp]);

  // This useEffect logs the password when it changes
  useEffect(() => {
    console.log("New password:", strin); // Logs updated password state after it changes
  }, [strin]); // This only triggers when strin changes

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-[#1e293b] p-6 rounded-xl w-full max-w-md shadow-lg text-white">
        <h1 className="text-center text-xl font-semibold mb-4">Password generator</h1>

        {/* Password Input & Copy Button */}
        <div className="flex items-center mb-4">
          <input
            type="text"
            className="flex-1 px-4 py-2 rounded-l-md bg-white text-black outline-none"
            value={strin} // Display generated password here
            readOnly
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md">
            copy
          </button>
        </div>

        {/* Length Slider */}
        <div className="flex items-center mb-4">
          <input
            type="range"
            min="4"
            max="20"
            value={len}
            className="w-full"
            onChange={(e) => setlen(e.target.value)}
          />
          <span className="ml-3 text-orange-400 font-semibold">Length: {len}</span>
        </div>

        {/* Checkboxes */}
        <div className="flex gap-6 justify-center text-orange-400 font-medium">
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={num} onChange={() => setnum(!num)} />
            Numbers
          </label>
          <label className="flex items-center gap-1">
            <input type="checkbox" checked={sp} onChange={() => setsp(!sp)} />
            Characters
          </label>
        </div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
