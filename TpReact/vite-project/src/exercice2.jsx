import {useContext, useRef, useState,createContext } from "react";

const ContextActuel = createContext(null);
function Sac(){
  return <PorteFeuille/>;
}
function PorteFeuille(){
  return <Carte/>
}
function Carte(){
  const {nom,prenom,passion} = useContext(ContextActuel);
  return(
    <>
    {nom && prenom && passion && (
      <P>
        je m' appelle 
      </P>
    )
    </>
  )
}
function ExerciceDeux(){
  const [nom, setNom] =useState("");
  const [prenom, setPrenom] =useState("");
  const [passion, setPassion] =useState("");

  const nomRef = useRef();ss
  const prenomRef = useRef();
  const passionRef = useRef();

const handleSubmit = (event) => {
  event.preventDefault();
  setNom(nomRef)
}
}