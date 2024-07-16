import {Component} from 'react'
import PasswordItem from '../passwordItem'
import './index.css'

class PasswordsManager extends Component {
  render() {
    return (
      <div className="password-manager-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="password-manager-img"
        />
        <PasswordItem />
      </div>
    )
  }
}

export default PasswordsManager
