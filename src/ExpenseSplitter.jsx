import React, { useState } from 'react';

function ExpenseSplitter() {
    const [expenses, setExpenses] = useState([]);
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0);

    const addExpense = () => {
        if (name && amount > 0) {
            const newExpense = { name, amount };
            setExpenses([...expenses, newExpense]);
            setTotal(total + amount);
            setName('');
            setAmount(0);
        }
    };

    const calculateShares = () => {
        const numPeople = expenses.length;
        const individualShare = total / numPeople;
        const shares = {};

        expenses.forEach((expense) => {
            const { name, amount } = expense;
            const share = individualShare - amount;
            shares[name] = share;
        });

        return shares;
    };

    return (
        <div className='w-full h-screen flex flex-col justify-start items-center font-mono  bg-bluish text-white'>
            <div className='flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            <h1 className=' text-2xl sm:text-3xl  font-mono font-bold py-5 sm:py-10 '>
                Separate <span className='text-orange-600 '>Checks.</span>
            </h1>
            </div>
            <div className='flex flex-col justify-center  w-11/12 sm:w-auto items-center  h-auto bg-slate-200 shadow-md  shadow-gray-600 rounded-md p-5'>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className=' w-auto sm:w-96 rounded-lg p-4 shadow-sm shadow-gray-500 h-16 sm:h-20 outline-none text-xl my-2 mx-2 text-black'
                />
                <input
                    type="number"
                    placeholder="Amount"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value))}
                    className='w-auto sm:w-96 rounded-lg p-4 shadow-sm shadow-gray-500 h-16 sm:h-20 outline-none text-xl my-2 mx-2 text-black'
                />
                <button onClick={addExpense} className='py-3 shadow-md shadow-gray-600 font-semibold mt-2 px-6  rounded-lg text-white  bg-redish'>Add Expense</button>
            </div>
            <div className='w-11/12 sm:w-96 sm:mr-10 mt-5 sm:mt-10  h-auto flex flex-col items-start'>
                <div className='mb-3'>
                    <h2 className='text-2xl mb-1 font-mono font-medium bg-bluish text-white underline underline-offset-4'>Expenses:</h2>
                    <ul>
                        {expenses.map((expense, index) => (
                            <li key={index} className='text-xl'>
                                {expense.name}: &#8377;{expense.amount}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h2 className='sm:text-medium sm:text-lg'>Total: &#8377;{total}</h2>
                </div>
                <div>
                    <h2 className='sm:text-medium sm:text-lg'>Per Person: &#8377;{total / expenses.length}</h2>
                </div>
                <div>
                    <h2 className='mt-1 text-xl underline underline-offset-4 mb-1'>Individual Shares:</h2>
                    <ul>
                        {Object.entries(calculateShares()).map(([name, share]) => (
                            <li key={name} className='my-2 text-md w-screen sm:w-auto flex items-center gap-1'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 sm:w-6 sm:h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                                {share < 0 ? <h><b>{name}</b> gets <b>&#8377;{parseInt(-share)}</b> from the group.</h> : <h1><b>{name}</b> owes <b>&#8377;{parseInt(share)} </b> to the group.</h1>}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ExpenseSplitter;
