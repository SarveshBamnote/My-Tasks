import './index.css'

const Tags = props => {
  const {eachTag, selectTag, isSelected} = props
  const {optionId, displayText} = eachTag

  const onClickTagBtn = () => {
    selectTag(optionId)
  }

  const btnClass = isSelected ? 'tags-buttons active-btn' : 'tags-buttons'

  return (
    <li className="tags-list-item">
      <button className={btnClass} onClick={onClickTagBtn} type="button">
        {displayText}
      </button>
    </li>
  )
}

export default Tags
