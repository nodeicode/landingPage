import React from 'react'
import './Main.module.css'
import Ports from '../Ports'
import About from '../About'
import {Card,Expo,Naaclick,Neclick,Npclick,Projects,Git,Linkw,Exp} from '../styled.js'

export default class Main extends React.Component{

  state={aa:true,p:false,e:false};

  componentDidMount(){
    setTimeout(()=>{
      this.setState({show:true});
    },1000);
  }

  render(){
    // Scrap this navigation get a simpler nav
    // var aa = () => {
    //   this.setState({aa:true,p:false,e:false});
    // };
    // var p = () => {
    //   this.setState({ aa: false, p: true, e: false });
    // };
    // var e = () => {
    //   this.setState({ aa: false, p: false, e: true });
    // };
        return(
            <div className="r">
            <Card className="a">
            <img className="profileimg" src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Lohit Aryan</h1>
            </Card>

            <div className="nav">
              <Naaclick /*onMouseEnter={aa}*/ clic={this.state.aa} className="n aa" /*onClick={aa}*/>About</Naaclick>
              <Npclick  clic={this.state.p} clica={this.state.aa} className="n p" >Projects</Npclick>
              <Neclick clic={this.state.e}  clicp={this.state.p} className="n e" >Experience</Neclick>
            </div>

            {this.state.aa ? (<About clic={this.state.aa}/>) : null}

            {this.state.p ? (
            <Projects className="projects" clic={this.state.p}>
               {/* <Typist
                  avgTypingDelay={100}
                  startDelay={500}
                  cursor={{ hideWhenDone: true }}
                  className="T2">
               </Typist>*/}
                <a className="T2 pro">My Projects ⚙️</a>
                <Git className="git1">
                  <Linkw href="https://github.com/nodeicode/Node-Mongoose-Do-it-App">
                    <img className="gi" src="../static/git.png" aria-hidden="true"/>
                  <a className="rep">nodeicode/Node-Mongoose-Do-it-App <br/></a>
                  <a className="desc">Custom email-password OAuth using PassportJS and mongodb database.</a>
                  </Linkw>
              </Git>
                <Git className="git2">
                  <Linkw href="https://github.com/nodeicode/landingPage">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/landingPage <br /></a>
                    <a className="desc"> Github Repo of this Website!</a>
                  </Linkw>
                </Git>
                <Git className="git3">
                  <Linkw href="https://github.com/nodeicode/Proxy-Script-bash">
                    <img className="gi" src="../static/git.png" aria-hidden="true" />
                    <a className="rep">nodeicode/Proxy-Script-bash <br /></a>
                    <a className="desc">A bash script to set up proxy chains and start the VPN and browser for anonymous browsing.</a>
                  </Linkw>
                </Git>
              </Projects>): null}
            
            {this.state.e ? (
            <Exp className="exp" clic={this.state.e}>
                {/*<Typist
                  avgTypingDelay={100}
                  startDelay={500}
                  cursor={{ hideWhenDone: true }}
                  className="T2">
                </Typist>*/}
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
                <ul class="l1">  
                  <li className="item">Debugging enterprise Server connection or integration issues of faculty devices</li>
                  <li className="item">Implementing Web Designs and Maintaining University Websites</li>
                  <li className="item">Managing University Data services like cloud storage, digital collaborative work-spaces,
backups and recovery</li>
                </ul>
                  </Expo>
            </Exp>):null}
            <Ports/>
            {this.state.show?(<style global jsx>{`.I{display:block}`}</style>):null}
            
          </div>
        );
    }}
