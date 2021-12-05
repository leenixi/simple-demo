import './App.css';
import CurrencyExchange from './CurrencyExchange';

function App() {
  return (
    <div>
      <h2>Calculator example</h2>
      <CurrencyExchange exchange={27.19} />
    </div>
  );
}

export default App;
