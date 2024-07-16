import './index.css'

const profileColors = [
  'background-1',
  'background-2',
  'background-3',
  'background-4',
  'background-5',
  'background-6',
  'background-7',
  'background-5',
]

const YourPasswords = props => {
  const {eachItem, showPassword, onDeleteItems} = props
  const profileColor = profileColors[Math.floor(Math.random() * 8)]
  const {id, username, password, website} = eachItem
  const deleteItem = () => {
    onDeleteItems(id)
  }
  return (
    <li className="profile-list-item">
      <div className="password-details-container">
        <div className={`profile-is ${profileColor}`}>
          <h1 className="profile-initial">{username[0].toUpperCase()}</h1>
        </div>
        <div className="password-information-container">
          <p className="password-details">{website}</p>
          <p className="password-details">{username}</p>
          {showPassword ? (
            <p className="password-details">{password}</p>
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
              alt="stars"
              className="star-img"
            />
          )}
        </div>
      </div>
      <button
        className="delete-button "
        type="button"
        onClick={deleteItem}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default YourPasswords
