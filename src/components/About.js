import React from 'react'
import {Aabout} from './styled'

export default function About({clic}){
    //render(){
    return(
        <Aabout clic={clic}>
          
          <a className="T2">About Me 👨‍💻</a> <br/>
          <a className="b">
              I ❤️ Javascript, heavily focused on React, Node and Next. 
              Currently an Undergrad majoring in Computer Science 
              {/* at The University of Illinois at Chicago <img className="logo" href="https://www.uic.edu/" src="../static/uic_logo.jpg"/> */}
              <br/> Graduating December 2020
              Actively Looking for Fall 2020 Internships and Full time Job Oppourtunities
              </a>
        <style jsx>{`
            .about{
              grid-row:2;
              grid-column:3/5;
              /* border:solid;
              border-color: black; */
              justify-items:center ;
              text-align: left;
              top:2vh;
              /* display: none; */
            }
            .logo{
              top:1vmin;
              position: relative;
              width:2vw;
              height:2vw;
            }
        `}</style>
          </Aabout>
    )
//}
}
