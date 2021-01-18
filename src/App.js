


import React, { Component } from 'react'

export class App extends Component {

  state ={
    titre : "Bonjour",
    paragraphe : "lorem ipsum",
    titre2 : "",
    titre3 : "",
    paragraphe2 : ""
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


  saveInput = (e) =>{
    this.setState({
      titre2 : e.target.value,
    })
    console.log(e.target.value)
  }

  changeTitre = () =>{
    this.setState({
      titre3 : this.state.titre2,
    })
    

  }

  changeParagraphe2 = (e) =>{
    this.setState({
      paragraphe2 : e.target.value,

    })
  }

 
  render() {

    
    return (
      <div>
        <h1 onClick={this.changeTitle}>{this.state.titre}</h1>
    <p>{this.state.paragraphe}</p>
        <button onClick={this.changeParagraphe}>modifier le paragraphe</button>
    <h1>{this.state.titre3}</h1>
        <input onChange={this.saveInput} type="text"/>
        <button onClick ={this.changeTitre} >clique ici</button>
    <p>{this.state.paragraphe2}</p>
        <textarea onChange={this.changeParagraphe2} name="" id="" cols="30" rows="10"></textarea>
      </div>
    )
  }
}

export default App

