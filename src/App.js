


import React, { Component } from 'react'

export class App extends Component {

  state ={
    titre : "Bonjour",
    paragraphe : "lorem ipsum"
  }

  changeTitle = ()=>{
    this.setState({
      titre : "au revoir"
    

    })
    
  }


  changeParagraphe = () =>{
    this.setState({
      paragraphe : "le texte est modifié"

    })
  }
  render() {
    return (
      <div>
        <h1 onClick={this.changeTitle}>{this.state.titre}</h1>
    <p>{this.state.paragraphe}</p>
        <button onClick={this.changeParagraphe}>modifier le paragraphe</button>
        
      </div>
    )
  }
}

export default App

