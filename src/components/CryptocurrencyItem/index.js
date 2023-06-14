// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {cryptoData} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = cryptoData

  return (
    <li className="crypto-data-container">
      <div className="name-logo-container">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="crypto-text">{currencyName}</p>
      </div>
      <div className="value-container">
        <p className="crypto-text">{usdValue}</p>
        <p className="crypto-text">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
