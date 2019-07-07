import React from 'react'
import styled from 'styled-components'
const Card = styled.div`
box-shadow: 0 4px 8px 0 rgb(0,0,0,0.2);
border-radius:5%;
background-color:white;
border-type:block;
border-color:white;
`;
export default function  About(){
        return(
            <div className="r">
            <Card className="a">
            <img src="../static/profile.jpeg"/>
            <h1>Lohit Aryan</h1>
            </Card>
            <Card className="b">
            <h1>What did I Do?</h1>
            <h2>That's what this page is all about <span>😁</span></h2>
          </Card>
          </div>
        );
    }
