import styled, { keyframes } from 'styled-components'
import { fadeIn, fadeInRight, fadeOut } from 'react-animations'

export const fadein = keyframes`${fadeIn}`;
export const fadeinr = keyframes`${fadeInRight}`;
export const fadeo = keyframes`${fadeOut}`;

export const Card = styled.div`
background-color:white;
border-radius:25px;
animation: 2s ${fadein};
`;
export const Icon = styled.span`
font-size:8vmin;
color:#f08d07;
animation: 2s ${fadeinr};
`;
export const Linkw = styled.a`
text-decoration:none;
color:inherit;
`;
export  const Naaclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
export  const Npclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
border-left-color: ${props => props.clica || props.clic ? "#f08d07" : "#e8e8e8"};
}
`;
export  const Neclick = styled.button`
&&{
border-color: ${props => props.clic ? "#f08d07" : "#e8e8e8"};
border-left-color: ${props => props.clicp || props.clic ? "#f08d07" : "#e8e8e8"};
}
`;

export  const Projects = styled.div`
animation: 1s ${props => props.clic ? fadein : fadeo} forwards;

`;

export  const Exp = styled.div`
animation: 1s ${props => props.clic ? fadein : fadeo} forwards;

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


// export {Icon,Linkw,Card,Expo,Git,Exp,Projects,Neclick}