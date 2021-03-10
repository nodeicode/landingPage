import React from 'react'
import {Aabout} from './styled'

export default function About({clic}){
    //render(){
    return(
        <Aabout clic={clic}>
          
          <a className="T2">About Me 👨‍💻</a>
          <p className="b">❤️ Javascript and Python, currently focused on 
          <img className= "badge" src="https://img.shields.io/badge/-Reactjs-black?style=for-the-badge&logo=react"/> 
          <img className= "badge" src="https://img.shields.io/badge/-Nodejs-grey?style=for-the-badge&logo=node.js"/>
          and
          <img className= "badge" src="https://img.shields.io/badge/-Django-green?style=for-the-badge&logo=django"/>
          </p> 
          <p className="b s">Graduated December 2020 from the University Of Illinois at Chicago
          <img className="logo" href="https://www.uic.edu/" src="/uic_logo.jpg"/> majoring in Computer Science </p>
          {/* <p className="b">Working on multiple startups and taking on challenges to reach my goal of learning something new and coding
          something out everyday</p> */}
          <p className="b">Actively Looking for full time Oppourtunities that give me a chance to learn more and be a part of a fast
          paced and growing company with a collaborative and transparent culture that is looking to make a difference!</p>
          <p className="b">Wanna get in touch? Check out my socials or Shoot me an email at <a href="mailto:lohitaryan20@gmail.com">lohitaryan20@gmail.com</a> </p>
        <style jsx>{`
            .badge{
              padding: 0.5%;
              top: 2vmin;
              position: relative;
              width: 13vmin;
              height: 4vmin;
            }
            .s{margin:0;}
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
              top:2vh;
              left:0.2vw;
              position: relative;
              width:3vw;
              height:3vw;
              border-radius:50%;
            }
            @media screen and (max-width: 900px) {
              .logo{
                top:0.5vh;
              }
            }
        `}</style>
          </Aabout>
    )
//}
}
