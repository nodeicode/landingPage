import './index.css'
import React from "react";
import Main from "../src/components/Main/Main.js";
import Typist from "react-typist";
import styled, { keyframes } from 'styled-components'
import {fadeIn,fadeOut} from 'react-animations/lib/fade-in';

// const fadeou = keyframes`${fadeOut}`;
// const fadei = keyframes`${fadeIn}`;

function HomePage({state}){

  /*ComponentDidMount() {
     fetch('https://api.github.com/users/nodeicode/repos',{
      method:'GET',
      headers:{
      'Authorization':'token fbdd3205a5fa28578d120f3ee578a7ac2d6df4d2'}
    }).then(res=>res.json())
      .then(response=>{
        response.forEach(element => {
          console.log(JSON.stringify(element["name"]));
        });
      })
      .catch(err=>console.log(err));
  }*/

  //render() {
    return (
      <div className="root">
            <Main />
          {/* <a className="a1">Hello!</a> */}
        <a className="cpyright">Copyright © Lohit Aryan Gopikonda</a>
      </div>
    );
  }
//}

export default HomePage
