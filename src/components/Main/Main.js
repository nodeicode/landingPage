import React ,{useState} from 'react'
import './Main.module.css'
import Ports from '../Ports'
import About from '../About'
import Project from '../Projects'
import {ProfileCard,Nav,NavElement,GradientBox} from '../styled.js'
import Experience from '../Experience'

export default function Main(){

  const [nav,setnav] = useState('a');
  const dynamo = (state)=>{
    if(state=='a')return (<About clic={nav} />)
    if(state=='p')return (<Project clic={nav}/>)
    if(state=='e')return (<Experience clic={nav}/>)
  }

  // render(){
        return(
            <div className="r">
            <ProfileCard >
            <img className="profileimg" src="../static/profilec.jpeg" alt="Profle Pic"/>
            <h1 className="hi">Hi There! 👋 <br/> I'm Lohit</h1>
            </ProfileCard>

            <div className="nav">
              <NavElement column="1" elem='a' active = {nav} onClick={()=>setnav('a')}>About</NavElement>
              <NavElement column="2" elem='p' active = {nav} onClick={()=>setnav('p')}>Projects</NavElement>
              <NavElement column="4" elem='e' active = {nav} onClick={()=>setnav('e')}>Experience</NavElement>
              <Nav active={nav}/>
            </div>

            <GradientBox className="grad">{dynamo(nav)}</GradientBox>

            <Ports/>
            
          </div>
        );
    }
  //}
