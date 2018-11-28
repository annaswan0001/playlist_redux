import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.findTrack = this.findTrack.bind(this);
    this.inputRef = React.createRef();
    this.searchRef = React.createRef();
  }
  addTrack() {
    const inputValue = this.inputRef.current.value;
    this.props.onAddTrack(inputValue);
    this.inputRef.current.value = "";
  }

  findTrack() {
    const inputValue = this.searchRef.current.value;
    this.props.onFindTrack(inputValue);
    this.searchRef.current.value = ""
   
  }

  render() {
    return (
      <div>
        <div><input type="text" ref={this.inputRef} />
        <button onClick={this.addTrack}>btn</button>
        </div>
      
        <div><input type="text" ref={this.searchRef} />
        <button onClick={this.findTrack}>btn</button>
        </div>
        <ul>
          {this.props.tracks.map((el, i) => (
            <li key={i}>{el.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks.filter(track => track.name.includes(state.filterTracks)),



  }),
 dispatch=>({
   onAddTrack:(name)=>{
   const payload = {
   id:Date.now().toString(),
   name
   };
   dispatch({type:"ADD_TRACK",  payload})
   },
   onFindTrack:(name)=>{
   dispatch({type:"FIND_TRACK",payload:name}) 
   }
 })
)(App);
