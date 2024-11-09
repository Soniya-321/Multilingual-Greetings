import './index.css'

const TabItem = props => {
  const {languageGreetingsList, isActive, clickTab} = props
  const {buttonText} = languageGreetingsList
  const onClickTabItem = () => {
    clickTab(languageGreetingsList.id)
  }
  const btnClassName = isActive ? 'active-tab-btn' : 'button'

  return (
    <button className={btnClassName} onClick={onClickTabItem}>
      {buttonText}
    </button>
  )
}
export default TabItem
