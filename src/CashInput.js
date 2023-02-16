
import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
//import QRCodePage from './QRCodePage';


  //const [qrCodeUrl, setQrCodeUrl] = useState('');

  const CashInput = () => {
    const [cashAmount, setCashAmount] = useState('');
   //const [qrCode, setQrCode] = useState('');
  
  
    const handleKeypadClick = (event,value) => {
      event.stopPropagation();
      setCashAmount(cashAmount + value);
    };
  
    const handleClear = () => {
      setCashAmount('');
    };
  
  

const handleSubmit = (event) => {
 
 

  event.preventDefault();
  console.log('submit');
  const paymentAmount = parseFloat(cashAmount); // Convert cashAmount to a number
  /*if(+cashAmount%10!==0||+cashAmount%500!=0)
  {
    
  }*/
  if (!isNaN(paymentAmount)) {
   
    axios({
      method: 'post',
      url: 'http://localhost:3002/api/checkoutRequestForPaytm',
      data: {
          order_id: Math.floor(Math.random() * 1000),
          amount: cashAmount,
          machine_id: 10001,
          payment_method: 'paytm'
      }
    })
    .then(function (response) {
      console.log(response.data,"response data");
    });
    // });
  }
};

 /*if (qrCode) {
    return <QRCodePage qrCode={qrCode} />;
  }*/
  return (
    <>  
    <p className='label'>Enter the amount </p>
        <div className="keypad">
        <div className="keypad-row">
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'1')}>1</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'2')}>2</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'3')}>3</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'4')}>4</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'5')}>5</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'6')}>6</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'7')}>7</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'8')}>8</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'9')}>9</button>
        </div>
        <div className="keypad-row">
          <button className="keypad-button keypad-button-clear" onClick={() => handleClear()}>&times;</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'0')}>0</button>
          <button className="keypad-button" onClick={(event) => handleKeypadClick(event,'.')}>.</button>
        </div>
      </div>
      <input
        type="text"
        id="cashAmount"
        value={cashAmount}
        onChange={(event) => setCashAmount(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      </>

  );
};



export default CashInput;



