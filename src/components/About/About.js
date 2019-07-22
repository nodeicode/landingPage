import React from 'react'
import './About.css'
import styled,{keyframes} from 'styled-components'
import {fadeInRight} from 'react-animations'

const fadein  = keyframes`${fadeInRight}`;

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgb(0,0,0,0.2);
border-radius:5%;
animation: 2s ${fadein};
background-color:white;
border-type:block;
border-color:white;
`;
export default class About extends React.Component{
  render(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profile.jpg"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>
            <Card className="b">
            <h1 className="hi">What did I Do?</h1>
            /*Gotta ADDD a Button with a GitHUb repos info componenet! */
          </Card>
          </div>
        );
    }}
