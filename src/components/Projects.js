import React from 'react'
import {Projects,Git,Linkw} from './styled'

export default function Project(props){
    //render(){
    return(
        <Projects className="projects" clic={props.clic}>
                <a className="T2 pro">My Projects ⚙️</a>
                <Git className="git1">
                  <Linkw href="https://github.com/nodeicode/Node-Mongoose-Do-it-App">
                    <img className="gi" src="/git.png" aria-hidden="true"/>
                  <a className="rep">nodeicode/Node-Mongoose-Do-it-App <br/></a>
                  <a className="desc">Custom email-password OAuth using PassportJS and mongodb database.</a>
                  </Linkw>
              </Git>
                <Git className="git2">
                  <Linkw href="https://github.com/nodeicode/landingPage">
                    <img className="gi" src="/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/landingPage <br /></a>
                    <a className="desc"> Github Repo of this Website!</a>
                  </Linkw>
                </Git>
                <Git className="git3">
                  <Linkw href="https://github.com/nodeicode/Proxy-Script-bash">
                    <img className="gi" src="/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/Proxy-Script-bash <br /></a>
                    <a className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</a>
                  </Linkw>
                </Git>
              </Projects>
    )
//}
}
