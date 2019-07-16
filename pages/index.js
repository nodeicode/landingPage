import '../static/index.css'
import React from 'react'
import About from '../src/components/About/About.js'
import Typist from 'react-typist'
export default class HomePage extends React.Component {

  state = {render:false,class:""}
  
  renderAbout=()=>{
    setTimeout(()=>{
      this.setState({render:true,class:"dis"});
    },1000);
  }

  render(){
  const dis = {display:'none'}
  //return(<About/>)
    return (
    <div className="root">
      <Typist
        avgTypingDelay={100}
        startDelay={1000}
        cursor={{blink:true}}
        onTypingDone={this.renderAbout}>
        <a>HELLO!</a>
      <Typist.Backspace count={6} delay={100}/>
        </Typist>
      {this.state.render?(<div><About/>
      <style jsx global>{`.Typist{display:none}`}</style>
      </div>):null}
    </div>
  )
}}