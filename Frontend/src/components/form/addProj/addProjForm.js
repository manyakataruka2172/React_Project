import React, { useState } from "react";
import "./addProj.css";
import Project from "./project";
import CreateArea from "./createArea";
import $ from "jquery";

function ProjectForm({projects,setProj}) {
   async function addProj(newProj) {
   
    await setProj(prevProjs => {
      return [...prevProjs, newProj];
    });
   
  }

  function deleteProj(id) {
    setProj(prevProjs => {
      return prevProjs.filter((projItem, index) => {
        return index !== id;
      });
    });
  }

  // function phoneview(){                             //for navbar
  //   console.log("sdsjfhjf");
  //   $('.proj-grid-card-content').toggleClass("show");
  //   }

  return (
    <div class="projectdetails">
      <h2>Projects</h2>
      <CreateArea onAdd={addProj} />
      <div class="projgrid">
      {projects.map((projItem, index) => {
        return (
          <Project
            key={index}
            id={index}
            title={projItem.title}
            desc={projItem.description}
            img={projItem.img}
            onDelete={deleteProj}
            
          />
        );
      })}
      </div>
      </div>
     
  );
}

export default ProjectForm;


