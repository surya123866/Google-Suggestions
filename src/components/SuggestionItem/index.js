import './index.css'

const SuggestionItem = props => {
  const {suggestionItem, updateSearchInput} = props
  const {suggestion} = suggestionItem

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }
  return (
    <li className="list">
      <p className="suggestion">{suggestion}</p>
      <button className="addSuggestionBtn" type="button">
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          className="buttonImage"
          alt="arrow"
          onClick={onClickSuggestion}
        />
      </button>
    </li>
  )
}
export default SuggestionItem
