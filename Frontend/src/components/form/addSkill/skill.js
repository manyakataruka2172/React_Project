import React from "react";
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

function Skill(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="skill-grid-item">
      <h3>{props.skill}</h3>
      <DeleteOutlineIcon className="skilldeleteicon" onClick={handleClick} />
    </div>
  );
}

export default Skill;
