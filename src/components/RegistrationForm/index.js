// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    fistName: '',
    lastName: '',
    isFistNameValid: false,
    isLastNameValid: false,
    isFormValid: false,
  }

  validateForm = () => {
    const {fistName, lastName} = this.state

    if (fistName === '' && lastName === '') {
      this.setState({
        isFistNameValid: true,
        isLastNameValid: true,
      })
    } else if (fistName === '' && lastName !== '') {
      this.setState({
        isFistNameValid: true,
        isLastNameValid: false,
      })
    } else if (fistName !== '' && lastName === '') {
      this.setState({
        isFistNameValid: false,
        isLastNameValid: true,
      })
    } else if (fistName !== '' && lastName !== '') {
      this.setState({
        isFistNameValid: false,
        isLastNameValid: false,
      })
    } else {
      this.setState({
        isFistNameValid: false,
        isLastNameValid: false,
      })
    }
  }

  onClickSubmitBtn = event => {
    event.preventDefault()
    this.validateForm()
    const {fistName, lastName} = this.state
    if (fistName !== '' && lastName !== '') {
      this.setState({
        isFormValid: true,
      })
    }
  }

  onChangeFirstName = event => {
    const {fistName} = this.state
    this.setState({
      fistName: event.target.value,
    })
    if (fistName === '') {
      this.setState({
        isFistNameValid: true,
      })
    } else {
      this.setState({
        isFistNameValid: false,
      })
    }
  }

  onChangeLastName = event => {
    const {lastName} = this.state
    this.setState({
      lastName: event.target.value,
    })
    if (lastName === '') {
      this.setState({
        isLastNameValid: true,
      })
    } else {
      this.setState({
        isLastNameValid: false,
      })
    }
  }

  submitAnotherResponse = () => {
    this.setState({isFormValid: false})
  }

  renderAfterFormSubmitted = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-para">Submitted Successfully</p>
      <button
        type="button"
        className="submit-btn-success"
        onClick={this.submitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  renderFormContainer = () => {
    const {fistName, lastName, isFistNameValid, isLastNameValid} = this.state
    const firstNameInputClsName = isFistNameValid ? 'input-el-err' : 'input-el'
    const lastNameInputClsName = isLastNameValid ? 'input-el-err' : 'input-el'
    return (
      <form className="form-container" onSubmit={this.onClickSubmitBtn}>
        <div className="form-item-container">
          <label htmlFor="firstName" className="label-text">
            FIRST NAME
          </label>
          <input
            type="text"
            placeholder="First name"
            id="firstName"
            className={firstNameInputClsName}
            onChange={this.onChangeFirstName}
            value={fistName}
            onBlur={this.onChangeFirstName}
          />
          {isFistNameValid && <p className="err-msg">Required</p>}
        </div>
        <div className="form-item-container">
          <label htmlFor="lastName" className="label-text">
            LAST NAME
          </label>
          <input
            type="text"
            placeholder="Last name"
            id="lastName"
            className={lastNameInputClsName}
            onChange={this.onChangeLastName}
            value={lastName}
            onBlur={this.onChangeLastName}
          />
          {isLastNameValid && <p className="err-msg">Required</p>}
        </div>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    )
  }

  render() {
    const {isFormValid} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Registration</h1>
        {isFormValid
          ? this.renderAfterFormSubmitted()
          : this.renderFormContainer()}
      </div>
    )
  }
}
export default RegistrationForm
