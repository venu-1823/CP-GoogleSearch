// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionItemDetails, updateSearchInput} = props
  const {suggestion} = suggestionItemDetails

  const onClickSuggestion = () => {
    updateSearchInput(suggestion)
  }

  return (
    <li>
      <p>{suggestion}</p>
      <button type="button" onClick={onClickSuggestion}>
        <img src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png " alt="arrow" />
      </button>
    </li>
  )
}
export default SuggestionItem
