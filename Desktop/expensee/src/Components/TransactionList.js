import React,{useContext} from 'react'
import Header from './Header'
import Form from './Form'
import Transaction from './Transaction'
import { GlobalContext } from '../Context/GlobalState'

function TransactionList() {
    const {transactions}=useContext(GlobalContext);
  return (
    <div>
        <Header />
        <div style={{display:'flex',flexDirection:'row',marginTop:'1rem'}}>
            <div style={{width:'50%',marginRight:'1rem'}}><Form /></div>
            <div style={{Width:'50%'}}>
                <h2>Transaction History</h2>
                <ul className='list'>
                    {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default TransactionList