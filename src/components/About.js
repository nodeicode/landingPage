import React from 'react'
import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeOut } from 'react-animations'

export const fadein = keyframes`${fadeIn}`;
export const fadeo = keyframes`${fadeOut}`;

export const Aabout = styled.div`
animation: 1s ${props => props.clic ? fadein : fadeo} forwards;
`;

export default class Ports extends React.Component{
    render(){
    return(
        <Aabout clic={this.props.clic} className="about">
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
        <style jsx>{`
            .logo{
              top:1vmin;
              position: relative;
              width:2vw;
              height:2vw;
            }
            .T2{
              color: #f08d07;
              font-size:2vmax;
              align-self: center;
              justify-self: start; 
            }
            .b{
              color:#020024;  
              line-height: 2.5vmax;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
              font-size: 2.5vmin;
              text-align: left;
            }
        `}</style>
          </Aabout>
    )
}}
