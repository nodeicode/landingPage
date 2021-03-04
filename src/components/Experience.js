import React from 'react'
import {Exp,Expo} from './styled'

export default function Experience(props){
    //render(){
    return(
        <Exp className="exp" clic={props.clic}>
                <a className="T2">My Experience 💼</a>
                <Expo className="expo2">
                  <img src="../static/trec.png" className="logo2" />
                  <a className="list1">Web Development Intern</a>
                  {/*<i className="fa fa-arrow-circle-down extend fa-lg" aria-hidden="true"></i>*/}
                  <ul className="l2">
                    <li className="item">Designed a Web-based real estate transaction management system in ReactJS </li>
                    <li className="item"> Integrate and collect data from public record APIs and databases using Django and SQL</li>
                    <li className="item">Worked on the web accessibility feature to make our site easy to use for disabled users</li>
                  </ul>
                </Expo>
                <Expo className="expo1">
                  <img src="../static/cada.jpg" href="https://cada.uic.edu/" className="logo1" />
                  <a className="list">Computer Operations Aide</a>
                  {/*<i className="fa fa-arrow-circle-down extend fa-lg" aria-hidden="true"></i>*/}
                <ul className="l1">  
                  <li className="item">Debugging enterprise Server connection or integration issues of faculty devices</li>
                  <li className="item">Implementing Web Designs and Maintaining University Websites</li>
                  <li className="item">Managing University Data services like cloud storage, digital collaborative work-spaces,backups and recovery</li>
                </ul>
                  </Expo>
            </Exp>
    )
//}
}
