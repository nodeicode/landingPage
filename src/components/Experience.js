import {Exp,Git} from './styled'
import { Scrollbars } from 'react-custom-scrollbars';

export default function Experience(props){
    //render(){
    return(
        <Exp className="exp" clic={props.clic}>
          <a className="T2">My Experience 💼 (Under Contruction 🚧)</a>
          <Scrollbars
          autoHeight
          autoHeightMin={350}
          autoHeightMax={450}
          >
                <Git>
                  <img className="gi" src="/git.png" aria-hidden="true"/>
                  <a className="rep" href="https://github.com/nodeicode/Node-Mongoose-Do-it-App"> Lead Software Engineer Intern<br/></a> 
                  <p className="desc">
                    Worked on the Real estate Transaction management microservice <br/> 
                    Primary stack used: 
                    <img className= "badge" src="https://img.shields.io/badge/-Reactjs-black?style=for-the-badge&logo=react"/> 
                    <img className= "badge" src="https://img.shields.io/badge/-Django-green?style=for-the-badge&logo=django"/>  
                  </p>
                  <img className="placeh"src="/trec1.png" aria-hidden="true"/>
                </Git>
                <Git>
                    <img className="gi" src="/git.png" aria-hidden="true"/>
                    <a className="rep" href="https://github.com/nodeicode/landingPage">Machine Learning Inten <br/></a>
                    <p className="desc"> Developed a Chrome Plugin to serve the NLP model API for wide spread usage of the Neural Network Model</p>
                    <img className="placeh"src="/dca.png" aria-hidden="true"/>
                </Git>
                <Git>
                    <img className="gi" src="/git.png" aria-hidden="true"/>
                    <a className="rep" href="https://github.com/nodeicode/Proxy-Script-bash">Computer Operations Aide<br/></a>
                    <p className="desc"> Managed the College of Art, Archeteture and Desgin websites </p>
                    <img className="placeh"src="/cada.jpg" aria-hidden="true"/>
                </Git>
          </Scrollbars>
            </Exp> 
    )
}

