import React, { useState } from "react";
import "./addSkill.css";
import Skill from "./skill";
import CreateArea from "./createArea";

function SkillForm({skills,setSkill}) {
   async function addSkill(newSkill) {
   
    await setSkill(prevSkills => {
      return [...prevSkills, newSkill];
    });
   
  }

  function deleteSkill(id) {
    setSkill(prevSkills => {
      return prevSkills.filter((skillItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div class="skilldetails">
      <h2>Skills</h2>
      <div class="inputholder txtar"> 
           <div class="starHolder"><p>*</p></div>
       <CreateArea CreateArea onAdd={addSkill} />
       </div>
      <div class="skillgrid">
      {skills.map((skillItem, index) => {
        return (
          <Skill
            key={index}
            id={index}
            skill={skillItem}
            onDelete={deleteSkill}
          />
        );
      })}
      </div>
      
      
      
     </div>
  );
}

export default SkillForm;
