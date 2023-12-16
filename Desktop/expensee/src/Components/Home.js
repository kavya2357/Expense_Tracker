import React,{useContext,useState,useEffect} from 'react'
import './Styles/Home.css'
import Header from './Header'
import Form from './Form'
import Graph from './Graph'
import { GlobalContext } from '../Context/GlobalState'
function Home() {
  const { transactions } = useContext(GlobalContext);

  // Local state to manage totalIncome and totalExpense
  const [totals, setTotals] = useState({ totalIncome: '0.00', totalExpense: '0.00' });

  useEffect(() => {
    // Function to calculate and update totals
    const calculateTotals = () => {
      const totalIncome = transactions
        .filter((transaction) => transaction.transactionType.toLowerCase() === 'income')
        .reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
        .toFixed(2);

      const totalExpense = transactions
        .filter((transaction) => transaction.transactionType.toLowerCase() === 'expense')
        .reduce((total, transaction) => total + parseFloat(transaction.amount), 0)
        .toFixed(2);

      setTotals({ totalIncome, totalExpense });
    };

    // Calculate totals initially and on every change in transactions
    calculateTotals();
  }, [transactions]);

  return (
    <div className='home'>
      <Header />

      <div className='body'>
        <div className='overview'>
          <div style={{width:'100%',height:'50%'}}><Graph /></div>
          <div className='stats'>
            <div className='balance'>
              <p style={{margin:'0',paddingBottom:'0'}}>Balance</p>
              <span style={{margin:'0',padding:'0'}}>${totals.totalIncome-totals.totalExpense}</span>
            </div>
            <div className='income_expense'>
              <div className='income'>
                <p>Income</p>
                <span>${totals.totalIncome}</span>
              </div>
              <div className='expense'>
                <p>Expense</p>
                <span>${totals.totalExpense}</span>
              </div>
            </div>
          </div>
        </div>
        <div className='transaction'><Form /></div>
      </div>
    </div>
  )
}

export default Home