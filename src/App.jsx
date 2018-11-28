import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import {asyncGetTracks} from  './actions/tracks'

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
      <div style={{  background: "url(" + "https://images.unsplash.com/photo-1502240868472-18259bc0f863?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e082b295e23d98c4e7d3d2484b29d743&auto=format&fit=crop&w=1350&q=80" + ") no-repeat center center /cover",
      minHeight:"100vh"}}>
          <div>
          <button onClick={this.props.onGetTracks}>GET ASYNK TRACKS</button>
        </div>
        <div><input type="text" ref={this.inputRef} />
        <button onClick={this.addTrack}>ADD TRACK</button>
        </div>
      
        <div><input type="text" ref={this.searchRef} />
        <button onClick={this.findTrack}>SEARCH TRACK</button>
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
    tracks: state.tracks.filter(track => track.name.toLowerCase().includes(state.filterTracks.toLowerCase())),




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
   },
   onGetTracks:()=>{

  dispatch(asyncGetTracks())
   }
 })
)(App);
