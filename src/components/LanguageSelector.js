import React from "react"

class LanguageSelector extends React.Component {
  render() {
    return (
      <h2 className="ui header">
        <div className="content" style={{ marginRight: "1em" }}>
          Select a language:
        </div>
        <i
          className="flag uk"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.onLanguageColorChange("english", "primary")}
        />
        <i
          className="item flag nl"
          style={{ cursor: "pointer" }}
          onClick={() => this.props.onLanguageColorChange("dutch", "red")}
        />
      </h2>
    )
  }
}

export default LanguageSelector
