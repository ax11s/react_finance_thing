import React, { useState } from 'react';

export default function Debt () {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');
    const [sum, setSum] = useState(0);
    const [saved, setSaved] = useState(0);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      const amount = parseInt(input1);
      const period = parseInt(input2);
      const inflation = parseInt(input3);
      const total = amount*((100-inflation*period)/100)
      const savedtotal = amount - total
      setSum(total);
      setSaved(savedtotal);
    };
    return (
        <div class="w-full">

            <div className="container  mt-16 mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Debt Calculator</h1>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="flex items-center mb-2">
          <label htmlFor="input1" className="mr-2">Amount</label>
          <input type="number" id="input1" value={input1} onChange={e => setInput1(e.target.value)} className="border p-2" required />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="input2" className="mr-2">Period (in Years)</label>
          <input type="number" id="input2" value={input2} onChange={e => setInput2(e.target.value)} className="border p-2" required />
        </div>
        <div className="flex items-center mb-2">
          <label htmlFor="input3" className="mr-2">Inflation (in %)</label>
          <input type="number" id="input3" value={input3} onChange={e => setInput3(e.target.value)} className="border p-2" required />
        </div>
        <button type="submit" className="bg-orange-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
      {sum !== 0 && <p className="text-lg font-semibold">Value after: {sum}</p>}
      {saved !== 0 && <p className="text-lg font-semibold">Amount Saved : {saved}</p>}
      </div>

        </div>
    );
}