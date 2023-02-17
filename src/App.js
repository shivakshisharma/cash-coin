import './style.css';
import CashInput from './CashInput';
//import QRCodePage from './qrCodePage';
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <img className ="coin"src="coin.jpg" alt="Coin Logo" />
      <CashInput />
      
    </div>
  );
}

export default App;