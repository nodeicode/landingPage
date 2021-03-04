import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInRight, fadeOut } from 'react-animations'

const fadein = keyframes`${fadeIn}`;
const fadeo = keyframes`${fadeOut}`;
const device = {
    mobileS: `(max-width: 900px)`,
    tablet: `(min-width: 768px)`,
    laptop: `(min-width: 1024px)`,
  };

export const ProfileCard = styled.div`
background-color:white;
border-radius:25px;
animation: 2s ${fadein};
line-height: 1.4;
display: block;
align-self: center;
justify-self: center;

grid-column: 2/3;
grid-row: 2;

display: inline-grid;
grid-auto-rows: 1vmax 12vmax 14vmax; 

@media ${device.mobileS}{
    grid-row:1;
    grid-column:1/-1;
    grid-auto-rows:auto;
    grid-auto-columns: auto auto;
    grid-gap:2vmin;
}
`;
export const Icon = styled.span`
font-size:8vmin;
color:#f08d07;
animation: 2s ${fadein};
`;
export const Linkw = styled.a`
text-decoration:none;
color:inherit;
`;

export const GradientBox = styled.div`
align-items: center;
position: relative;
padding: 10% 2em;
box-sizing: border-box;


grid-row:2;
grid-column:3/5;
@media ${device.mobileS}{
    grid-row:3;
    grid-column:1/-1;
}
justify-items:center ;
text-align: left;
background:white;
background-clip: padding-box;
border: solid 0.3em transparent;
border-radius: 1em;
&:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -5px;
    border-radius: inherit;
    background: linear-gradient(45deg, #f08d07 0%, #ffa1fe 100%);
`;

export const Aabout = styled.div`
animation: 1s ${props => props.clic=='a' ? fadein : fadeo} forwards;
`;

export  const Projects = styled.div`
animation: 1s ${props => props.clic=='p' ? fadein : fadeo} forwards;
`;

export  const Exp = styled.div`
animation: 1s ${props => props.clic=='e' ? fadein : fadeo} forwards;

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
height: .5vmin;
@media ${device.laptop}{
width:${props=>{
    if(props.active=='a')return '40%'
    if(props.active=='p')return '50%'
    if(props.active=='e')return '60%'
}};
margin-left:${props=>{
    if(props.active=='a')return '30%'
    if(props.active=='p')return '125%'
    if(props.active=='e')return '227%'
}};
}
@media ${device.mobileS}{
position:relative;
width:${props=>{
    if(props.active=='a')return '30%'
    if(props.active=='p')return '40%'
    if(props.active=='e')return '55%'
}};
left:${props=>{
    if(props.active=='a')return '0%'
    if(props.active=='p')return '100%'
    if(props.active=='e')return '205%'
}};
}
background: #f08d07;
border: none;
transition: .3s ease-in-out;
align-self: top;
`;

export const NavElement = styled.a`
grid-column:${props=> props.column};
font-size:2.2vmin;
justify-self:center;
transition: color 0.5s ease;
&:hover{
    color:${props=> props.active==props.elem ? '#00000':'#f08d07'};
    cursor:pointer;
}
@media ${device.mobileS}{
    font-size:3vmin;
}
`;


// export {Icon,Linkw,Card,Expo,Git,Exp,Projects,Neclick}