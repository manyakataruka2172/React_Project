import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
function CreateArea(props) {
  const [proj, setProj] = useState({
    title: "",
    description: "" ,
    img: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setProj(prevProj => {
      return {
        ...prevProj,
        [name]: value
      };
    });
  }

  function submitProj(event) {
    props.onAdd(proj);
    setProj({
      title: "",
      description: "" ,
      img: ""
    });
    event.preventDefault();
  }

  return (
    <div class="projcreateArea">
      <form>
      <div class="inputholder txtar"> 
        <div class="starHolder"><p>*</p></div>
        <input
        required="true"
          name="title"
          onChange={handleChange}
          value={proj.title}
          placeholder="Title....."
        />
        </div>
        <div class="inputholder txtar"> 
        <div class="starHolder"><p>*</p></div>
        <textarea
        required="true"
          name="description"
          onChange={handleChange}
          value={proj.description}
          placeholder="Description....."
          rows="4"
        />
        </div>
        <div class="inputholder txtar"> 
        <div class="starHolder"><p>*</p></div>
        <input
        required="true"
          name="img"
          onChange={handleChange}
          value={proj.img}
          placeholder="Drive Link of Project Image....."
        />
        </div>
        <div class="projadd"> 
        <p>Add Project
        <AddCircleIcon className="projaddicon" onClick={submitProj}/></p>
        </div>
         </form>
    </div>
  );
}

export default CreateArea;
