import {Component} from 'react'

import './index.css'

const plusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
const minusImage =
  'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'

class FaqItem extends Component {
  state = {isActive: false}

  isActiveRunning = () => {
    const {isActive} = this.state
    const {faqsItem} = this.props
    const {answerText} = faqsItem

    if (isActive) {
      return (
        <div>
          <hr className="horizontal-border" />
          <p className="answer-text">{answerText}</p>
        </div>
      )
    }
    return null
  }

  onToggle = () => {
    this.setState(prevState => ({
      isActive: !prevState.isActive,
    }))
  }

  onButtonRender = () => {
    const {isActive} = this.state
    const image = isActive ? minusImage : plusImage
    const altText = isActive ? 'minus' : 'plus'

    return (
      <button type="button" className="button" onClick={this.onToggle}>
        <img src={image} alt={altText} />
      </button>
    )
  }

  render() {
    const {faqsItem} = this.props
    const {questionText} = faqsItem

    return (
      <li className="list-type">
        <div className="questions-container">
          <h1 className="questions">{questionText}</h1>
          {this.onButtonRender()}
        </div>
        {this.isActiveRunning()}
      </li>
    )
  }
}

export default FaqItem
