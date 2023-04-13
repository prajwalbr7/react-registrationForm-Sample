// Write your JS code here
import './index.css'
import {Component} from 'react'

class RegistrationForm extends Component {
  state = {
    input1: '',
    input2: '',
    Message1: '',
    Message2: '',
    activePage: false,
  }

  onFormSubmit = event => {
    event.preventDefault()
    const {input1, input2} = this.state
    this.Text1()
    this.Text2()

    if (input1 === '' || input2 === '') {
      this.setState({activePage: false})
    } else {
      this.setState(prevState => ({
        activePage: !prevState.activePage,
        input1: '',
        input2: '',
      }))
    }
  }

  onChangeInput1 = event => {
    this.setState({input1: event.target.value})
  }

  onChangeInput2 = event => {
    this.setState({input2: event.target.value})
  }

  Text1 = () => {
    const {input1} = this.state
    const Mention = 'Required'

    if (input1 === '') {
      this.setState({Message1: Mention})
    } else {
      this.setState({Message1: ''})
    }
  }

  Text2 = () => {
    const {input2} = this.state
    const Mention = 'Required'
    if (input2 === '') {
      this.setState({Message2: Mention})
    } else {
      this.setState({Message2: ''})
    }
  }

  MainPage = () => {
    this.setState(prevState => ({activePage: !prevState.activePage}))
  }

  renderSuccessFullMessage = () => (
    <div className="form-style-2">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="img-sizing"
      />
      <p className="submit-message-para">Submitted Successfully</p>
      <button
        className="button-style-move-to-Main-page"
        type="button"
        onClick={this.MainPage}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderFormPage = () => {}

  render() {
    const {input1, input2, Message1, Message2, activePage} = this.state
    return (
      <div className="container1">
        <div className="">
          <h1 className="heading">Registration</h1>
          {!activePage && (
            <form className="form-style" onSubmit={this.onFormSubmit}>
              <label className="label-style" htmlFor="firstname">
                FIRST NAME
              </label>
              <input
                id="firstname"
                type="text"
                placeholder="First name"
                onBlur={this.Text1}
                className={`input-style ${Message1}`}
                onChange={this.onChangeInput1}
                value={input1}
              />
              <p className="para-style">{Message1}</p>
              <label className="label-style " htmlFor="lastname">
                LAST NAME
              </label>
              <input
                id="lastname"
                type="text"
                placeholder="Last name"
                onBlur={this.Text2}
                className={`input-style ${Message2}`}
                onChange={this.onChangeInput2}
                value={input2}
              />
              <p className="para-style">{Message2}</p>
              <div className="button-center">
                <button className="button-style-form-page " type="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
          {activePage && this.renderSuccessFullMessage()}
        </div>
      </div>
    )
  }
}
export default RegistrationForm
