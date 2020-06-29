import React from 'react'
import './About.css'
import Typist from 'react-typist'
import styled,{keyframes} from 'styled-components'
import {fadeIn,fadeInRight} from 'react-animations'
import '@fortawesome/fontawesome-free/js/all'

const fadein  = keyframes`${fadeIn}`;
const fadeinr = keyframes`${fadeInRight}`;


const Card = styled.div`
background-color:white;
border-radius:25px;
animation: 1.5s ${fadein};
`;
const Icon = styled.span`
font-size:8vmin;
color:#f08d07;
animation: 2s ${fadeinr};
`;
const Linkw = styled.a`
text-decoration:none;
color:inherit;
`; 
export default class About extends React.Component{

  state={show:false};

  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true});
    },1000);
  }

  render(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>

            <div class="nav">
              <a class="aa">About</a>
              <a class="p">Projects</a>
              <a class="e">Experience</a>
            </div>

            <div class="about">
            <Typist
                avgTypingDelay={100}
                startDelay={2000}
                cursor={{hideWhenDone: true}}
                className="T2">
                {/*<a>I am a Blogger</a>
                <Typist.Delay ms={1500}/>
                <Typist.Backspace count={7} delay={200}/>
                <a>Gamer</a>
                <Typist.Delay ms={1500}/>
                <Typist.Backspace count={5} delay={200}/>
                <a>CS Student</a>
                <Typist.Delay ms={1000}/>
                <Typist.Backspace count={10} delay={200}/>*/}
                <a>About Me</a> 
              </Typist>
            
              <a className="b">I ❤️ Javascript, heavily focused on React, Node and Next. I'm a Undergrad majoring in Computer Science at the University of Illinois at Chicago, graduating December 2020.  
              </a>
            </div>
            
            <div class="ports">
            <Icon className="L I"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><i className="fab fa-linkedin"/></Linkw></Icon>
            <Icon className="T I"><Linkw href="https://twitter.com/nodeicode"><i className="fab fa-twitter-square"/></Linkw></Icon>
            <Icon className="D I"><Linkw href="https://dev.to/nodeicode"><i className="fab fa-dev"/></Linkw></Icon>
            <Icon className="G I"><Linkw href="https://github.com/nodeicode"><i className="fab fa-github"/></Linkw></Icon>
            </div>
            {this.state.show?(<style global jsx>{`.I{display:block}`}</style>):null}
          </div>
        );
    }}
