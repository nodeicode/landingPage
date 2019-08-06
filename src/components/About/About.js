import React from 'react'
import './About.css'
import styled,{keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations'
import {FaLinkedin,IconContext,FaTwitterSquare,FaGithub,FaDev} from 'react-icons'

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
export default class About extends React.Component{
  render(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profile.jpg"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>
            <FaLinkedin className="L"/>
            <FaTwitterSquare/>
            <FaGithub/>
            <FaDev/>
          </div>
        );
    }}
