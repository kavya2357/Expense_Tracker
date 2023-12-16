import React, {useContext} from 'react'
import { GlobalContext } from '../Context/GlobalState';
import './Styles/Transaction.css'
function Transaction({transaction}) {

  const { deleteTransaction } = useContext(GlobalContext);
  const { transactionType } = transaction;
  const transactionClass = transactionType.toLowerCase() === 'income' ? 'minus' : 'plus';
  return (
    <div>
        <li className={transactionClass}>
            {transaction.text} <span>${Math.abs(transaction.amount)}</span>
            <p>{new Date(transaction.date).toLocaleDateString()}</p>
            <button onClick={()=>deleteTransaction(transaction.id)} className="delete-btn">x</button>
        </li>
    </div>
  )
}

export default Transaction