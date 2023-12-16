import React from 'react'
import './Styles/Home.css'
import Header from './Header'
import Form from './Form'
import Graph from './Graph'
import { MdOutlineAccountCircle } from "react-icons/md";
function Home() {
  return (
    <div className='home'>
      <Header />

      <div className='body'>
        <div className='overview'>
          <div style={{width:'100%',height:'50%'}}><Graph /></div>
          <div className='stats'>
            <div className='balance'>
              <p style={{margin:'0',paddingBottom:'0'}}>Balance</p>
              <span style={{margin:'0',padding:'0'}}>$120</span>
            </div>
            <div className='income_expense'>
              <div className='income'>
                <p>Income</p>
                <span>$200</span>
              </div>
              <div className='expense'>
                <p>Expense</p>
                <span>$80</span>
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