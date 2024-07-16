import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import YourPasswords from '../yourPasswords'
import './index.css'

class PasswordItem extends Component {
  state = {
    passwordsList: [],
    userName: '',
    website: '',
    password: '',
    showPassword: false,
    searchValue: '',
  }

  gettingUserName = e => {
    this.setState({
      userName: e.target.value,
    })
  }

  gettingWebsiteName = e => {
    this.setState({
      website: e.target.value,
    })
  }

  gettingPassword = e => {
    this.setState({
      password: e.target.value,
    })
  }

  showPasswordsChecked = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  searchPassword = e => {
    this.setState({
      searchValue: e.target.value,
    })
  }

  addingPassword = e => {
    e.preventDefault()
    const {userName, website, password} = this.state
    const newPassword = {
      id: uuid4(),
      username: userName,
      website,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPassword],
      userName: '',
      website: '',
      password: '',
    }))
  }

  geetingPasswordList = () => {
    const {passwordsList, searchValue} = this.state
    const gettingList = passwordsList.filter(eachItem =>
      eachItem.website
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase()),
    )
    return gettingList
  }

  onDeleteItems = id => {
    const {passwordsList} = this.state
    const remaningList = passwordsList.filter(eachItem => eachItem.id !== id)
    this.setState({
      passwordsList: remaningList,
    })
  }

  render() {
    const {userName, website, password, showPassword} = this.state
    const filteredList = this.geetingPasswordList()
    return (
      <div>
        <div className="password-item-bg-contianer">
          <div className="password-item-form-contianer">
            <h1 className="password-item-heading">Add New Password</h1>
            <form className="form-container">
              <div className="form-control">
                <div className="form-control-img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                    alt="website"
                    htmlFor="website"
                    className="form-img"
                  />
                </div>
                <input
                  type="text"
                  id="website"
                  className="form-input"
                  placeholder="Enter Website"
                  onChange={this.gettingWebsiteName}
                  value={website}
                />
              </div>
              <div className="form-control">
                <div className="form-control-img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png "
                    alt="username"
                    htmlFor="username"
                    className="form-img"
                  />
                </div>
                <input
                  type="text"
                  id="username"
                  className="form-input"
                  placeholder="Enter Username"
                  onChange={this.gettingUserName}
                  value={userName}
                />
              </div>
              <div className="form-control">
                <div className="form-control-img">
                  <img
                    src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                    alt="password"
                    htmlFor="password"
                    className="form-img"
                  />
                </div>
                <input
                  type="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter Password"
                  onChange={this.gettingPassword}
                  value={password}
                />
              </div>
              <button
                className="form-button"
                type="submit"
                onClick={this.addingPassword}
              >
                Add
              </button>
            </form>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt="password manager"
            className="password-image sm-type"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-image lg-type"
          />
        </div>
        <div className="yourpass-bg-contianer">
          <div className="yourpass-container">
            <div className="yourpass-heading-container">
              <h1 className="yourpass-heading">Your Passwords</h1>
              <p className="yourpass-span">{filteredList.length}</p>
            </div>
            <div className="search-container">
              <div className="search-icon-bg">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="search-icon"
                />
              </div>
              <input
                type="search"
                className="search-input"
                placeholder="Search"
                onChange={this.searchPassword}
              />
            </div>
          </div>
          <div className="check-box-contianer">
            <input
              type="checkbox"
              id="showPassword"
              className="show-password-checkbox"
              onChange={this.showPasswordsChecked}
            />
            <label htmlFor="showPassword" className="show-password">
              Show Passwords
            </label>
          </div>
          {filteredList.length === 0 ? (
            <div className="no-password-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-passwords-image"
              />
              <p className="no-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="password-list">
              {filteredList.map(eachItem => (
                <YourPasswords
                  eachItem={eachItem}
                  key={eachItem.id}
                  showPassword={showPassword}
                  onDeleteItems={this.onDeleteItems}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordItem
