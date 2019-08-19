import React from 'react'
import './About.css'
import Typist from 'react-typist'
import styled,{keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations'
import '@fortawesome/fontawesome-free/js/all'

const fadein  = keyframes`${fadeInRight}`;

const Card = styled.div`
box-shadow: 0 3px 15px 0 rgb(100,100,100,100.5);
border-radius:10%;
animation: 1.5s ${fadein};
border-type:solid;
border-color:white;
border-width:10px;
`;
const Icon = styled.span`
font-size:8vmin;
color:beige;
animation: 2s ${fadein};
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
    },2000);
  }

  render(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            <a className="tag">@nodeicode</a>
            </Card>
            <Typist
                avgTypingDelay={100}
                startDelay={2000}
                cursor={{hideWhenDone: true}}
                className="T2">
                <a>I am a Blogger</a>
                <Typist.Delay ms={1500}/>
                <Typist.Backspace count={7} delay={200}/>
                <a>Gamer</a>
                <Typist.Delay ms={1500}/>
                <Typist.Backspace count={5} delay={200}/>
                <a>CS Student</a>
                <Typist.Delay ms={1000}/>
                <Typist.Backspace count={10} delay={200}/>
                <a>Web Developer 😎</a> 
              </Typist>
            <Card className="b">
              <a className="ab"> ❤️ Javascript, heavily focused on React, Node and Next. Interested in knowing more about me 🤔? Contact me on any of my handles 😊 
              </a>
            </Card>
            <Icon className="L I"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><i className="fab fa-linkedin"/></Linkw></Icon>
            <Icon className="T I"><Linkw href="https://twitter.com/stackicode/"><i className="fab fa-twitter-square"/></Linkw></Icon>
            <Icon className="D I"><Linkw href="https://dev.to/nodeicode"><i className="fab fa-dev"/></Linkw></Icon>
            <Icon className="G I"><Linkw href="https://github.com/nodeicode"><i className="fab fa-github"/></Linkw></Icon>
            {this.state.show?(<style global jsx>{`.I{display:block}`}</style>):null}
          </div>
        );
    }}
