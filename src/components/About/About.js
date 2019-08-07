import React from 'react'
import './About.css'
import styled,{keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations'
import '@fortawesome/fontawesome-free/js/all'

const fadein  = keyframes`${fadeInRight}`;

const Card = styled.div`
box-shadow: 0 8px 12px 0 rgb(0,0,0,0.5);
border-radius:5%;
text-align:center;
animation: 2s ${fadein};
border-type:solid;
border-color:white;
border-width:10px;
`;
const Icon = styled.span`
font-size:5vmax;
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
            <img src="../static/profile.jpg"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>
            <Icon className="L I"><Linkw href="https://www.linkedin.com/in/lohit-aryan/"><i className="fab fa-linkedin"/></Linkw></Icon>
            <Icon className="T I"><Linkw href="https://twitter.com/stackicode/"><i className="fab fa-twitter-square"/></Linkw></Icon>
            <Icon className="D I"><Linkw href="https://dev.to/nodeicode"><i className="fab fa-dev"/></Linkw></Icon>
            <Icon className="G I"><Linkw href="https://github.com/nodeicode"><i className="fab fa-github"/></Linkw></Icon>
            {this.state.show?(<style global jsx>{`.I{display:block}.a{grid-column:2}`}</style>):null}
          </div>
        );
    }}
