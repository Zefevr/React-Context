import React from "react"
import LanguageContext from "../context/LanguageContext"
import ColorContext from "../context/ColorContext"

// Button is getting info out from the Consumer component created by the context provider and passing the value to the function
// This approach is normally used for multiple context objects. In this case: language and color

class Button extends React.Component {
  renderSubmit(value) {
    return value === "english" ? "Submit" : "Voorleggen"
  }

  renderButton(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>{value => this.renderSubmit(value)}</LanguageContext.Consumer>
      </button>
    )
  }

  render() {
    return <ColorContext.Consumer>{color => this.renderButton(color)}</ColorContext.Consumer>
  }
}

export default Button
