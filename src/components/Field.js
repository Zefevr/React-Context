import React from "react"
import LanguageContext from "../context/LanguageContext"

// Field is getting info out from the context object with this.context - need to connect the object wiht "static contexType" and call it out as this.context
// This approach is normally done to get access to ONE single object property - in this case: language

class Field extends React.Component {
  static contextType = LanguageContext

  render() {
    const text = this.context === "english" ? "Name" : "Naam"
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    )
  }
}

export default Field
