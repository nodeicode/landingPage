import React from 'react'
import './About.module.css'
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
const Naaclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
const Npclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
border-left-color: ${props => props.clica||props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
const Neclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
border-left-color: ${props => props.clicp||props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
const Aabout = styled.div`
animation: 1s ${props=> props.clic ? fadein : fadeo} forwards;
`;

const Projects = styled.div`
animation: 1s ${props=> props.clic ? fadein : fadeo} forwards;

`;

const Exp = styled.div`
animation: 1s ${props=>props.clic ? fadein : fadeo} forwards;

`;

const Git = styled.div`
animation: 1s fadein forwards;
border:solid;
border-color: #e8e8e8;
border-radius:10px;
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
    };
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>

            <div className="nav">
              <Naaclick onMouseEnter={aa} clic={this.state.aa} className="n aa" onClick={aa}>About</Naaclick>
              <Npclick onMouseEnter={p} clic={this.state.p} clica={this.state.aa} className="n p" onClick={p}>Projects</Npclick>
              <Neclick onMouseEnter={e} clic={this.state.e}  clicp={this.state.p} className="n e" onClick={e}>Experience</Neclick>
            </div>

            {this.state.aa ? (
            <Aabout clic={this.state.aa} className="about">
            {/*<Typist
                avgTypingDelay={100}
                startDelay={500}
                cursor={{hideWhenDone: true}}
                className="T2">
            </Typist>*/}
                <a className="T2">About Me 👨‍💻</a> <br/>
            
              <a className="b">
                  I ❤️ Javascript, heavily focused on React, Node and Next. <br/>
                  Currently an Undergrad majoring in Computer Science <br /> 
                  at The University of Illinois at Chicago <img className="logo" href="https://www.uic.edu/" src="../static/uic_logo.jpg"/>
                  <br/> Graduating December 2020
                  Actively Looking for Fall 2020 Internships and Full time Job Oppourtunities
                  </a>
              </Aabout>) : null}

            {this.state.p ? (
            <Projects className="projects" clic={this.state.p}>
               {/* <Typist
                  avgTypingDelay={100}
                  startDelay={500}
                  cursor={{ hideWhenDone: true }}
                  className="T2">
               </Typist>*/}
                <a className="T2 pro">My Projects ⚙️</a>
                <Git className="git1">
                  <Linkw href="https://github.com/nodeicode/Node-Mongoose-Do-it-App">
                    <img className="gi" src="../static/git.png" aria-hidden="true"/>
                  <a className="rep">nodeicode/Node-Mongoose-Do-it-App <br/></a>
                  <a className="desc">Custom email-password OAuth using PassportJS and mongodb database.</a>
                  </Linkw>
              </Git>
                <Git className="git2">
                  <Linkw href="https://github.com/nodeicode/landingPage">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/landingPage <br /></a>
                    <a className="desc"> Github Repo of this Website!</a>
                  </Linkw>
                </Git>
                <Git className="git3">
                  <Linkw href="https://github.com/nodeicode/Proxy-Script-bash">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/Proxy-Script-bash <br /></a>
                    <a className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</a>
                  </Linkw>
                </Git>
              </Projects>): null}
            
            {this.state.e ? (
            <Exp className="exp" clic={this.state.e}>
                {/*<Typist
                  avgTypingDelay={100}
                  startDelay={500}
                  cursor={{ hideWhenDone: true }}
                  className="T2">
                </Typist>*/}
                <a className="T2">My Experience 💼</a>
            </Exp>):null}

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
