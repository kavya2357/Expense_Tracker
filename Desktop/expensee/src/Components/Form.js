import React,{useState,useContext} from 'react'
import './Styles/Form.css'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { GlobalContext } from '../Context/GlobalState';
function Form() {
  const [transactionType, setTransactionType] = useState('income');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);

  const { addTransaction } = useContext(GlobalContext);
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  const handleTypeChange = (event) => {
    setTransactionType(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      transactionType:transactionType,
      amount: amount,
      text:description,
      date:selectedDate,
    }

    addTransaction(newTransaction);
    alert('Transaction added')
  }
  return (
    <div className='content'>
        <h1>Add New Transaction</h1>
        <form onSubmit={onSubmit}>
          <div className='incomeType'>
            <label>
              Transaction Type
            </label>
            <select value={transactionType} onChange={handleTypeChange}>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </select>
          </div>
          <div className='amount'>
            <label>Enter Amount</label>
            <input type='number' value={amount} onChange={handleAmountChange} placeholder='Enter Amount'/>
          </div>
          <div className='amount'>
            <label>Description</label>
            <input type='text' value={description} onChange={handleDescriptionChange} placeholder='Enter description'/>
          </div>
          <div className='submit'>
            <DatePicker selected={selectedDate} onChange={handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="Select date" style={{width:'50%'}}/>
            <button>Add Transaction</button>
          </div>
        </form>
    </div>
  )
}

export default Form