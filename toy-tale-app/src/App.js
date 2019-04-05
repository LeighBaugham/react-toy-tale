import React, { Component } from 'react';
import './App.css';
import ToyList from './ToyList';
import {toys} from './resources/toys.js'
import Header from './Header';
import ToyForm from './ToyForm';


class App extends Component {

  constructor() {
    super()
    this.state = {
      toys: toys,
      filtered: []
    }
  }

  // state = {
  //   toys: toys,
  //   viewform: false
  // }

  // handleLike = (id) => {

  //   var newLikeArray = this.state.toys.map((toy) => {
  //     if (toy.id === id) {
  //        ++toy.likes
  //        return toy
  //     }
  //     else 
  //     return toy
  //   })
  //   this.setState ({
  //       toys: newLikeArray
  //   })
  // }

  handleLike = (id) => {
    const newToyLikes = this.state.toys.map((t) => (t.id === id ? ({...t, likes: t.likes +1}) : t))
    this.setState({toys: newToyLikes})
  }
 

	
  handleSubmit = (e)=>{
    console.log("clicked!")
    e.preventDefault()
    // console.log("target", e.target.name.value)
    let newToy = {
      "name": e.target.name.value,
      "image": e.target.image.value,
      "likes": e.target.likes.value,
      "saved": false
    }

    let newToyArray = this.state.toys.slice()
    
    newToyArray.push(newToy)
    
    this.setState({
      toys:newToyArray
    })
    e.target.reset()

  }

  filterByLike = () => {
    let toys = this.state.toys.filter(toy => toy.likes > 0)
    return toys 

    this.setState({
      filtered: toys 
    })
  }

  showForms = () => {
    // console.log("Clicked")
    this.setState({ viewform: !this.state.viewform })
  }

  // handleRender = () => {
  //   if (this.state.viewform){
  //     return <Header /> && <ToyForm />
  //   } else {
  //     return <Header />
  //   }
  // }

  render() {
    return (
      <div>
        <Header filterLike={this.filterLike}/>
    <ToyForm display={this.state.viewform} handleSubmit={this.handleSubmit}/>
    
    
    <ToyList toys={this.state.filtered.length ===0 ? this.state.toys : this.state.filtered} showForms={this.showForms} handleLike={this.handleLike}/>   
    </div> 
);
  }
}

export default App;
