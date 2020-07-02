import React from 'react'
import './About.module.css'
import Typist from 'react-typist'
import styled,{keyframes} from 'styled-components'
import {fadeIn,fadeInRight,fadeOut} from 'react-animations'
import '@fortawesome/fontawesome-free/js/all'

const fadein  = keyframes`${fadeIn}`;
const fadeinr = keyframes`${fadeInRight}`;
const fadeo = keyframes`${fadeOut}`;


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
const Nclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
border-color-left: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
const Aabout = styled.div`
animation: 1.5s ${props=> props.clic ? fadein : fadeo} forwards;
`;

export default class About extends React.Component{

  state={aa:true,p:false,e:false};

  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true});
    },1000);
  }
  

  render(){
    var aa = () => {
      this.setState({aa:true,p:false,e:false});
    };
    var p = () => {
      this.setState({ aa: false, p: true, e: false });
    };
    var e = () => {
      this.setState({ aa: false, p: false, e: true });
      console.log(this.state.aa);
    };
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>

            <div className="nav">
              <Nclick clic={this.state.aa} className="n aa" onClick={aa}>About</Nclick>
              <Nclick clic={this.state.p} className="n p" onClick={p}>Projects</Nclick>
              <Nclick clic={this.state.e}  className="n e" onClick={e}>Experience</Nclick>
            </div>

            <Aabout clic={this.state.aa} className="about">
            <Typist
                avgTypingDelay={100}
                startDelay={2000}
                cursor={{hideWhenDone: true}}
                className="T2">
                <a>About Me</a> 
              </Typist>
            
              <a className="b">
              I ❤️ Javascript, heavily focused on React, Node and Next.
              I'm a Undergrad majoring in Computer Science at the
              University of Illinois at Chicago, graduating December 2020.</a>
            </Aabout>
            
        {this.state.aa?(<style global jsx>{`.about{display:block}`}</style>):null}

            <div className="ports">
            <Icon className="L I"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><i className="fab fa-linkedin"/></Linkw></Icon>
            <Icon className="T I"><Linkw href="https://twitter.com/nodeicode"><i className="fab fa-twitter-square"/></Linkw></Icon>
            <Icon className="D I"><Linkw href="https://dev.to/nodeicode"><i className="fab fa-dev"/></Linkw></Icon>
            <Icon className="G I"><Linkw href="https://github.com/nodeicode"><i className="fab fa-github"/></Linkw></Icon>
            </div>
            {this.state.show?(<style global jsx>{`.I{display:block}`}</style>):null}
          </div>
        );
    }}
