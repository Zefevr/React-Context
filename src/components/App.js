import React from "react"
import UserCreate from "./UserCreate"
import LanguageSelector from "./LanguageSelector"
import LanguageContext from "../context/LanguageContext"
import ColorContext from "../context/ColorContext"

class App extends React.Component {
  state = {
    language: "english",
    color: "primary",
  }

  onLanguageColorChange = (language, color) => {
    this.setState({ language, color })
  }

  render() {
    return (
      <div className="ui container">
        <div className="ui absolute menu inverted">
          <h1 className="header item">React Context Example</h1>
        </div>
        <div style={{ padding: "3em" }}>
          <LanguageSelector onLanguageColorChange={this.onLanguageColorChange} />

          <LanguageContext.Provider value={this.state.language}>
            <ColorContext.Provider value={this.state.color}>
              <UserCreate />
            </ColorContext.Provider>
          </LanguageContext.Provider>
        </div>
      </div>
    )
  }
}
export default App
