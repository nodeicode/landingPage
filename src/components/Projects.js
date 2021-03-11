import React from 'react'
import {Projects,Git,Linkw} from './styled'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Project(props){
    //render(){
    return(
        <Projects clic={props.clic}>
          <a className="T2 pro">My Projects ⚙️ (Under Contruction 🚧)</a>
          <Scrollbars
          autoHeight
          autoHeightMin={0}
          autoHeightMax={450}
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          >
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
                {/* </div> */}
                </Scrollbars>
              </Projects>
    )
//}
}
