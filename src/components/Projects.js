import React from 'react'
import {Projects,Git,Linkw} from './styled'

export default function Project(props){
    //render(){
    return(
        <Projects clic={props.clic}>
                <a className="T2 pro">My Projects ⚙️</a>
                <div className="scroll">
                <Git>
                  <img className="gi" src="/git.png" aria-hidden="true"/>
                  <a className="rep" href="https://github.com/nodeicode/Node-Mongoose-Do-it-App">nodeicode/Node-Mongoose-Do-it-App <br/></a>
                  <p className="desc">Custom email-password OAuth using PassportJS and mongodb database.</p>
                  <img className="placeh"src="/placeholder.png" aria-hidden="true"/>
                </Git>
                <Git>
                    <img className="gi" src="/git.png" aria-hidden="true"/>
                    <a className="rep" href="https://github.com/nodeicode/landingPage">nodeicode/landingPage <br/></a>
                    <p className="desc"> Github Repo of this Website!</p>
                    <img className="placeh"src="/placeholder.png" aria-hidden="true"/>
                </Git>
                <Git>
                    <img className="gi" src="/git.png" aria-hidden="true"/>
                    <a className="rep" href="https://github.com/nodeicode/Proxy-Script-bash">nodeicode/Proxy-Script-bash<br/></a>
                    <p className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</p>
                    <img className="placeh"src="/placeholder.png" aria-hidden="true"/>
                </Git>
                {/*
                <Git className="git3">
                  <Linkw href="https://github.com/nodeicode/Proxy-Script-bash">
                    <img className="gi" src="/git.png" aria-hidden="true" />
                    <p className="rep">nodeicode/Proxy-Script-bash <br /></p>
                    <p className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</p>
                  </Linkw>
                </Git> */}
                 <style jsx>{`
                 .scroll{
                   height:100%;
                   overflow-y:scroll;
                   display:inline-grid;
                   grid-auto-rows:min-content;
                   grid-gap:2%;
                 }
                 .rep{
                  color:#020024; 
                  line-height: 2.5vmax;
                  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                  font-size: 1.1vmax;
                  font-weight: 900;
                  position: relative;
                  left:1vmin;
                  grid-row:1;
                  grid-column:2/-1;
                  align-self:center;
                  margin:0;
                  text-decoration:underline;
                  transition: color 0.5s ease;
                }
                .rep:hover{
                  color:#48cae4;
                  cursor:pointer;
                }
                .desc{
                  color:grey;
                  grid-row:2;
                  grid-column:3;
                  font-size:0.9vmax
                }
                .gi{
                  width:4vmin;
                  height:4vmin;
                  grid-row:1;
                  grid-column:1;
                  justify-self:right;
                  align-self:center;
                }
                .placeh{
                  grid-row:2/4;
                  grid-column:1/3;
                  width:100%;
                  padding:1% 1%;
                }
                @media screen and (max-width: 900px) {
                  .placeh{
                    grid-row:3;
                    grid-column:1/-1;
                  }
                  .desc{
                    grid-column:1/-1;
                  }
                }
                `}</style>
                </div>
              </Projects>
    )
//}
}
