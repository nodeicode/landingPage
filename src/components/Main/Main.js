import React from 'react'
import './Main.module.css'
import Ports from '../Ports'
import About from '../About'
import Project from '../Projects'
import {Card,Expo,Projects,Git,Linkw,Exp,Nav} from '../styled.js'
import Experience from '../Experience'

export default class Main extends React.Component{

  state={nav:'a'};

  render(){
        return(
            <div className="r">
            <Card className="a">
            <img className="profileimg" src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>

            <div className="nav">
              <button className="aa one"  onMouseEnter={()=>this.setState({nav:'a'})}>About</button>
              <button className="p two"  onMouseEnter={()=>this.setState({nav:'p'})}>Projects</button>
              <button className="e three"  onMouseEnter={()=>this.setState({nav:'e'})}>Experience</button>
              <Nav active={this.state.nav}/>
            </div>

            {this.state.nav=='a'?(<About clic={this.state.nav} />):null}

            {this.state.nav=='p' ? (<Project clic={this.state.nav}/>): null}
            
            {this.state.nav=='e' ? (<Experience clic={this.state.nav}/>):null}

            <Ports/>
            
          </div>
        );
    }}
