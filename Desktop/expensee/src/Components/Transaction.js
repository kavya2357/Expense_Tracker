import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
import './Styles/Transaction.css'

function Transaction({transaction}) {

  const { deleteTransaction } = useContext(GlobalContext);
  const {transactionType} = transaction;
  console.log('Transaction Type:', transactionType);
  const transactionClass = transactionType.toLowerCase() === 'income' ? 'plus' : 'minus';
  return (
    <div style={{width:'100%',boxSizing:'border-box'}}>
      <li className={transactionClass}>
        <div className="transaction-info">
          <div>
            <span>{transaction.text}</span>
            <p>{new Date(transaction.date).toLocaleDateString()}</p>
          </div>
          <div className="amount-delete">
            <span>${Math.abs(transaction.amount)}</span>
            <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
              x
            </button>
          </div>
        </div>
      </li>
    </div>
  )
}

export default Transaction