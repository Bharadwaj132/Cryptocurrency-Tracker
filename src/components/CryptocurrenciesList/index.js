// Write your JS code here
import './index.css'
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoData()
  }

  getCryptoData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()

    const formattedData = data.map(eachItem => ({
      id: eachItem.id,
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({cryptoList: formattedData, isLoading: false})
  }

  render() {
    const {cryptoList, isLoading} = this.state

    return (
      <div className="app-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="crypto-list-container">
            <h1 className="title">Cryptocurrency Tracker</h1>
            <img
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
              className="cryptoLogo"
            />
            <ul className="list-container">
              <li className="list-item">
                <h2 className="list-heading">Coin Type</h2>
                <div className="value-container">
                  <h2 className="list-heading">USD</h2>
                  <h2 className="list-heading">EURO</h2>
                </div>
              </li>
              {cryptoList.map(item => (
                <CryptocurrencyItem key={item.id} cryptoData={item} />
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
