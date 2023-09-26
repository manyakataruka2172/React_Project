import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
function CreateArea(props) {
  const [exp, setExp] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setExp(prevExp => {
      return {
        ...prevExp,
        [name]: value
      };
    });
  }

  function submitExp(event) {
    props.onAdd(exp);
    setExp({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  return (
    <div class="expcreateArea">
      <form>
      <div class="inputholder txtar"> 
        <div class="starHolder"><p>*</p></div>
        <input
          required="true"
          name="title"
          onChange={handleChange}
          value={exp.title}
          placeholder="Title....."
        />
        </div>
        <div class="inputholder txtar"> 
        <div class="starHolder"><p>*</p></div>
        <textarea
          required="true"
          name="description"
          onChange={handleChange}
          value={exp.description}
          placeholder="Description....."
          rows="3"
        />
        </div>
        <div class="expadd"> 
        <p>Add Experience
        <AddCircleIcon className="expaddicon" onClick={submitExp}/></p>
        </div>

      </form>
    </div>
  );
}

export default CreateArea;
