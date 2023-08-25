import React from "react";

function Salutation(){
    return (
        <div>
    <Composant salutation=" salut comment allez vous" />
        </div>

    )
}
 function Composant({salutation}){
  return <div><h1>{salutation}</h1></div>
 }

export default Salutation;