
import React, { useState } from 'react';
import './style.css';
import axios from 'axios';
import QRCode from 'qrcode.react';
import upi from '../src/upi.png';
import upi1 from '../src/upi1.png';
import upi2 from '../src/upi2.png';
import upi3 from '../src/upi3.png';
import upi4 from '../src/upi4.png';


  //const [qrCodeUrl, setQrCodeUrl] = useState('');

  const CashInput = () => {
    const [cashAmount, setCashAmount] = useState('');
    const [qr,setQr]=useState('');
    const [error,setError]=useState(false);
    const[tab,setTab]=useState(false);
   //const [qrCode, setQrCode] = useState('');
  
  
    const handleKeypadClick = (event,value) => {
      event.stopPropagation();
      setCashAmount(cashAmount + value);
    };
  
    const handleClear = () => {
      setCashAmount('');
    };
  
  

   const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzY2MDQwNTEsImlkIjoiMTAwMDEifQ.XqcVZCi3zEb7NJXJhcH7u9NFlzQvNZSw8HwFNpSPyPg"; 
const handleSubmit = (event) => {
 

 setTab(true);
  event.preventDefault();
  console.log('submit');
  
  if(+cashAmount%500!==0&&+cashAmount%10!==0)
  {
     setError(true);
  }
  
  else{
   setError(false);
    axios({
      method: 'post',
      url: 'https://prodpaymentapi.wendor.in/api/checkoutRequestV2',
      data: {
        request_id: "1751_pp_40599vtle84nszx",
          amount: cashAmount,
          machine_id: 10001,
          payment_method: 'paytm'
      },
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NzYzODQwNjEsImlkIjoiMTc1MSJ9.e3TzoNABp5MCQZWINo23PtPXaZc5K5uZe7sG8A038fM'
      },

    })
    .then(function (response) {
      console.log(response.data,"response data");
      setQr(response.data.response.data.body.qrData);
    });
    // });
  }
};

 /*if (qrCode) {
    return <QRCodePage qrCode={qrCode} />;
  }*/
  return (
    <>  
  {tab?<div className='qrcode'> 
  <img className="image2" src={upi}/>
 
  <QRCode  value={qr.toString()} size={200} />
  <img className="image3" src={upi1}/>
  <img className="image5" src={upi3}/>
  <img className="image4" src={upi2}/>
 
  <img className="image6" src={upi4}/>


  </div>:<><p className='label'>Enter the amount </p>
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
      {error &&<p className='label'>Enter the Multiple of 10 and 500</p>}
    </>}
      </>

  );
};



export default CashInput;



