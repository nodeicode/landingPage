
import React from "react";
import Main from "../src/components/Main/Main.js";


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
        <footer>
        <a className="cpyright"> © Lohit Aryan Gopikonda</a>
        <style jsx>{`
        .cpyright{
          bottom:2vmin;
          text-align:center;
          font-size: 1.8vmin;
          color:gray;
          position:absolute;
          bottom:2vmin;
          right:1%;
        }
        `}</style>
        </footer>
      </div>
    );
  }
//}

export default HomePage
