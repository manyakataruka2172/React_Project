import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
function CreateArea(props) {
  const [skill, setSkill] = useState("");

  function handleChange(event) {
    const { value } = event.target;

    setSkill(value);
  }

  function submitSkill(event) {
    props.onAdd(skill);
    setSkill("");
    event.preventDefault();
  }

  return (
    <div class="skillcreateArea">
      <form>
        <input    
        required="true"      
          name="skill"
          onChange={handleChange}
          value={skill}
          placeholder="Add Skills....."
        />
        <AddCircleIcon className="skilladdicon" onClick={submitSkill}/>
       </form>
    </div>
  );
}

export default CreateArea;
