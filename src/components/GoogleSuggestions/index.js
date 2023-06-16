import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateSearchInput = suggestion => {
    this.setState({searchInput: suggestion})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(eachSuggestion =>
      eachSuggestion.suggestion
        .toLowerCase()
        .includes(searchInput.toLowerCase()),
    )

    return (
      <div className="App-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="Google logo"
          className="GoogleLogo"
        />
        <div className="search-container">
          <div className="searchBoxContainer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              alt="search icon"
              className="searchIcon"
            />
            <input
              type="Search"
              placeholder="Search Google"
              className="input"
              onChange={this.onChangeSearchInput}
              value={searchInput}
            />
          </div>
          <ul className="search-suggestions-container">
            {searchResults.map(eachSuggestion => (
              <SuggestionItem
                updateSearchInput={this.updateSearchInput}
                suggestionItem={eachSuggestion}
                key={eachSuggestion.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
