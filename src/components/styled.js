import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInRight, fadeOut } from 'react-animations'

export const fadein = keyframes`${fadeIn}`;
export const fadeinr = keyframes`${fadeInRight}`;
export const fadeo = keyframes`${fadeOut}`;

export const Card = styled.div`
background-color:white;
border-radius:25px;
animation: 4s ${fadein};
`;
export const Icon = styled.span`
font-size:8vmin;
color:#f08d07;
animation: 4s ${fadein};
`;
export const Linkw = styled.a`
text-decoration:none;
color:inherit;
`;

export const Aabout = styled.div`
animation: 2s ${props => props.clic=='a' ? fadein : fadeo} forwards;
`;

export  const Projects = styled.div`
animation: 2s ${props => props.clic=='p' ? fadein : fadeo} forwards;

`;

export  const Exp = styled.div`
animation: 2s ${props => props.clic=='e' ? fadein : fadeo} forwards;

`;

export const Git = styled.div`
animation: 1s fadein forwards;
border:solid;
border-color: #e8e8e8;
border-radius:10px;
`;

export  const Expo = styled.div`
animation: 1s fadein forwards;
border:solid;
border-color: #e8e8e8;
border-radius:10px;
`
export const Nav = styled.hr`
height: .25rem;
width: ${props=>{
    if(props.active=='a')return '69%'
    if(props.active=='p')return '89%'
    if(props.active=='e')return '121%'
}};
margin-left:${props=>{
    if(props.active=='a')return '8.1%'
    if(props.active=='p')return '110%'
    if(props.active=='e')return '233%'
}};
background: #f08d07;
border: none;
transition: .3s ease-in-out;
align-self: top;
`;


// export {Icon,Linkw,Card,Expo,Git,Exp,Projects,Neclick}