import {Component} from 'react'
import TabItem from '../TabItem'
import './index.css'

class Greetings extends Component {
  state = {
    activeLanguageId: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
  }

  clickTab = id => {
    this.setState({
      activeLanguageId: id,
    })
  }

  render() {
    const {languageGreetingsList} = this.props
    const {activeLanguageId} = this.state

    const listByLangauage = languageGreetingsList.filter(
      each => each.id === activeLanguageId,
    )

    return (
      <div className="app-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="tab-container">
          {languageGreetingsList.map(each => (
            <li className="list" key={each.id}>
              <TabItem
                languageGreetingsList={each}
                isActive={each.id === activeLanguageId}
                clickTab={this.clickTab}
              />
            </li>
          ))}
        </ul>
        <div className="card">
          {listByLangauage.map(each => (
            <img
              src={each.imageUrl}
              key={each.id}
              alt={each.imageAltText}
              className="card-img"
            />
          ))}
        </div>
      </div>
    )
  }
}

export default Greetings
