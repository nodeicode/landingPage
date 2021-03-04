import React from 'react'
import {Projects,Git,Linkw} from './styled'

export default function Project(props){
    //render(){
    return(
        <Projects className="projects" clic={props.clic}>
                <a className="T2 pro">My Projects ⚙️</a>
                <Git className="git1">
                  <Linkw href="https://github.com/nodeicode/Node-Mongoose-Do-it-App">
                    <img className="gi" src="../static/git.png" aria-hidden="true"/>
                  <p className="rep">nodeicode/Node-Mongoose-Do-it-App <br/></p>
                  <p className="desc">Custom email-password OAuth using PassportJS and mongodb database.</p>
                  </Linkw>
              </Git>
                <Git className="git2">
                  <Linkw href="https://github.com/nodeicode/landingPage">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <p className="rep">nodeicode/landingPage <br /></p>
                    <p className="desc"> Github Repo of this Website!</p>
                  </Linkw>
                </Git>
                <Git className="git3">
                  <Linkw href="https://github.com/nodeicode/Proxy-Script-bash">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <p className="rep">nodeicode/Proxy-Script-bash <br /></p>
                    <p className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</p>
                  </Linkw>
                </Git>
              </Projects>
    )
//}
}
