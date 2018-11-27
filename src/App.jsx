import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.addTrack = this.addTrack.bind(this);
    this.inputRef = React.createRef();
  }
  addTrack() {
    const inputValue = this.inputRef.current.value;
    this.props.onAddTrack(inputValue);
    this.inputRef.current.value = "";
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef} />
        <button onClick={this.addTrack}>btn</button>
        <ul>
          {this.props.tracks.map((el, i) => (
            <li key={i}>{el}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  state => ({
    tracks: state.tracks
  }),
 dispatch=>({
   onAddTrack:(track)=>{
   dispatch({type:"ADD_TRACK", payload:track})
   }
 })
)(App);
